import { useState, useRef, useEffect, memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { RootState } from 'src/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { createQueueBySingle, setURI } from 'src/redux/reducers/queue';
import { addItem, removeItem } from 'src/redux/reducers/library';

import { Options, OptionsItem } from 'src/components/Options';
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

function Card({ data }: { data: any }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { list } = useSelector((state: RootState) => state.library);
  const idxLib = list.findIndex((item) => item.uri === data.uri);

  const [ctxMenu, setCtxMenu] = useState<Array<any>>([false, 0, 0]);
  const wrapperRef = useRef<HTMLDivElement>(null);

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
      // cardData.image = data.albumOfTrack.coverArt.sources.at(0);
      // cardData.artists = data.artists.items.map((item: any) => {
      //   return { uri: item.uri, name: item.profile.name };
      // });
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
      cardData.image = data.visuals.avatarImage?.sources.at(0);
      cardData.name = data.profile.name;
      break;
    case 'user':
      cardData.text = 'Profile';
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
      cardData.text = 'By ' + data.owner.name;

      break;
  }

  // clear context menu when click outside
  useEffect(() => {
    const removeCtxMn = (e: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setCtxMenu([false, 0, 0]);
      }
    };
    document.body.addEventListener('click', removeCtxMn);
    document.body.addEventListener('contextmenu', removeCtxMn);
    return () => {
      document.body.removeEventListener('click', removeCtxMn);
      document.body.removeEventListener('contextmenu', removeCtxMn);
    };
  }, []);

  // config data to add into lib
  const addToLibrary = () => {
    if (type !== 'album' && type !== 'playlist') return;
    let item: any;
    switch (type) {
      case 'playlist':
        item = { ...data, coverArt: cardData.image, creator: data.owner, type };
        break;
      case 'album':
        item = { ...data, coverArt: cardData.image, creator: { ...data.owner, name: data.owner.display_name }, type };
        break;
      default:
        break;
    }
    dispatch(addItem(item));
    setCtxMenu([false, 0, 0]);
  };

  return (
    <div
      className={cx('wrapper')}
      onContextMenu={(e) => {
        e.preventDefault();
        if (wrapperRef.current)
          // calculate mouse position from top, left when click
          setCtxMenu([true, wrapperRef.current.offsetTop - e.pageY, wrapperRef.current.offsetLeft - e.pageX]);
      }}
      ref={wrapperRef}
    >
      <div className={cx('head')}>
        <div
          className={cx('image', { rounded: cardData.uri.split(':')[1] === 'artist' })}
          onClick={() => navigate(linkFromURI(cardData.uri))}
        >
          <img src={cardData.image?.url} alt={cardData.name} />
        </div>
        <div
          className={cx('play-btn')}
          onClick={() => {
            const type = cardData.uri.split(':')[1];
            if (type === 'album' || type === 'playlist' || type === 'artist') {
              dispatch(setURI(cardData.uri));
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

      {ctxMenu[0] && (
        <Options style={{ top: -ctxMenu[1], left: -ctxMenu[2] }}>
          <OptionsItem>Add to Queue</OptionsItem>
          {idxLib === -1 ? (
            <OptionsItem onClick={() => addToLibrary()}>Add to Library</OptionsItem>
          ) : (
            <OptionsItem
              onClick={() => {
                dispatch(removeItem(idxLib));
                setCtxMenu([false, 0, 0]);
              }}
            >
              Remove to Library
            </OptionsItem>
          )}
        </Options>
      )}
    </div>
  );
}

Card.defaultProps = {
  uri: '',
  id: '',
  image: { url: '' },
  name: '',
  text: '',
  artists: null,
};

export default memo(Card);
