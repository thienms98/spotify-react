import { useDispatch } from 'react-redux';
import { createQueueBySingle, setPlaylistAsQueue } from 'src/redux/reducers/queue';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import linkFromURI from 'src/utils/linkFromURI';

import classNames from 'classnames/bind';
import styles from './Card.module.scss';
const cx = classNames.bind(styles);

interface CardData {
  id: string;
  image: { url: string };
  uri: string;
  name: string;
  text: string;
  artists: string[] | null;
}
interface Artist {
  uri: string;
  name: string;
}
// const card = {
//   id: '37i9dQZF1DXdR77H5Z8MIM',
//   image: { url: 'https://i.scdn.co/image/ab67706f000000026dbe8ae0cb131e4a3ab86dd8' },
//   uri: 'spotify:playlist:37i9dQZF1DXdR77H5Z8MIM',
//   name: 'Nolja!',
//   text: "Time to press play on these jaem jams from 2010 onwards! Cover: BE'O",
// };

export default function Card({ data }: { data: any }) {
  console.log(data);

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
      cardData.image = { url: '' };
      cardData.artists = data.artists.map((item: any) => {
        return { uri: item.uri, name: item.name };
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
      cardData.text = 'Artist';
      cardData.image = data.visuals.avatarImage.sources.at(0);
      cardData.name = data.profile.name;
      break;
    case 'user':
      cardData.text = 'Profile';
      cardData.image = { url: data.image.largeImageUrl };
      cardData.name = data.displayName;
      break;
    case 'show':
      cardData.text = data.publisher.name;
      break;
    case 'podcast':
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
      cardData.text = 'By ' + data.owner.name;

      break;
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('head')}>
        <div
          className={cx('image', { rounded: cardData.uri.split(':')[1] === 'artist' })}
          onClick={() => navigate(linkFromURI(cardData.uri))}
        >
          <img src={cardData.image.url} alt={cardData.name} />
        </div>
        <div
          className={cx('play-btn')}
          onClick={() => {
            if (cardData.uri.split(':')[1] === 'playlist') {
              dispatch(setPlaylistAsQueue(cardData.uri));
            } else dispatch(createQueueBySingle(data));
          }}
        >
          <FontAwesomeIcon icon={faPlay} />
        </div>
      </div>
      <div className={cx('body')} onClick={() => navigate(linkFromURI(cardData.uri))}>
        <div className={cx('name')} title={cardData.name}>
          <Link to={linkFromURI(cardData.uri)}>{cardData.name}</Link>
        </div>
        <div className={cx('text')} title={cardData.text}>
          {cardData.text ||
            cardData.artists?.map((artist: any) => {
              return (
                <Link to={linkFromURI(artist.uri)} key={artist.uri.split(':')[2]}>
                  {artist.name}
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
