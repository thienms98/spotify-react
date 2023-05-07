import { useDispatch } from 'react-redux';
import { createQueueBySingle, setURI } from 'src/redux/reducers/queue';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import linkFromURI from 'src/utils/linkFromURI';

import classNames from 'classnames/bind';
import styles from './TopResult.module.scss';
const cx = classNames.bind(styles);

interface CardData {
  id: string;
  image: { url: string };
  uri: string;
  name: string;
  text: string;
  artists: string[] | null;
}

export default function TopResult({ data }: { data: any }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const type = data.uri.split(':')[1];
  const cardData: CardData = {
    uri: data.uri,
    id: data.id || data.uri.split(':')[2],
    image: data.image || { url: '' },
    name: data.name,
    text: '',
    artists: null,
  };

  switch (type) {
    case 'track':
      cardData.image = data.albumOfTrack.coverArt?.sources.at(0);
      cardData.artists = data.artists.items.map((item: any) => {
        return { uri: item.uri, name: item.profile.name };
      });
      break;
    case 'album':
      cardData.image = data.coverArt.sources.at(-1);
      cardData.artists = data.artists.items.map((item: any) => {
        return { uri: item.uri, name: item.profile.name };
      });

      break;
    case 'playlist':
      cardData.text = data.owner.name;
      cardData.image = data.images.items.at(-1)?.sources.at(-1);
      break;

    case 'artist':
      cardData.text = '';
      cardData.image = data.visuals.avatarImage?.sources?.at(0);
      cardData.name = data.profile.name;
      break;
    case 'user':
      cardData.text = '';
      cardData.image = { url: data.image.largeImageUrl };
      cardData.name = data.displayName;
      break;
    case 'show':
      cardData.text = data.publisher.name;
      cardData.image = data.coverArt.sources.at(-1);
      break;

    case 'episode':
      cardData.image = data.coverArt.sources.at(-1);
      cardData.text =
        new Date(data.releaseDate.isoString).toLocaleDateString('us-US', { year: 'numeric', month: 'long' }) +
        '-' +
        Math.round(data.duration.totalMilliseconds / 60000) +
        'min';
      break;
    default:
      cardData.text = data.owner.name;

      break;
  }

  return (
    <div className={cx('wrapper')}>
      <div
        className={cx('image', { rounded: cardData.uri.split(':')[1] === 'artist' })}
        onClick={() => navigate(linkFromURI(cardData.uri))}
      >
        <img src={cardData.image?.url} alt={cardData.name} />
      </div>
      <div className={cx('name')} title={cardData.name}>
        <Link to={linkFromURI(cardData.uri)}>{cardData.name}</Link>
      </div>
      <div className={cx('text')}>
        <div className={cx('artist')} title={cardData.text}>
          {cardData.text ||
            cardData.artists?.map((artist: any) => {
              return (
                <Link to={linkFromURI(artist.uri)} key={artist.uri.split(':')[2]}>
                  {artist.name}
                </Link>
              );
            })}
        </div>
        <div className={cx('type')}>{type}</div>
      </div>
      <div
        className={cx('play-btn')}
        onClick={() => {
          const type = cardData.uri.split(':')[1];
          if (['album', 'artist', 'playlist'].includes(type)) {
            dispatch(setURI(cardData.uri));
          } else dispatch(createQueueBySingle(data));
        }}
      >
        <FontAwesomeIcon icon={faPlay} />
      </div>
    </div>
  );
}
