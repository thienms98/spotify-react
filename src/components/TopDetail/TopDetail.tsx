import { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { linkFromURI } from 'src/utils';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { setURI } from 'src/redux/reducers/queue';
import { playStateChange } from 'src/redux/reducers/player';
import { addItem, removeItem, addTrackToFavorite, removeTrackFromFavorite } from 'src/redux/reducers/library';

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faHeart, faEllipsis } from '@fortawesome/free-solid-svg-icons';

//styles
import classNames from 'classnames/bind';
import styles from './TopDetail.module.scss';
const cx = classNames.bind(styles);

function toTimeString(millisecond: number) {
  const hour = Math.floor(millisecond / 3600 / 1000);
  const min = Math.floor(((millisecond / 1000) % 3600) / 60);
  const sec = Math.floor((millisecond / 1000) % 60);

  return hour ? `${hour} hour ${min} min` : `${min} min ${sec} sec`;
}

export default function TopDetail({ data, type }: { data: any; type: string }) {
  const dispatch = useDispatch();
  const playingUri = useSelector((state: RootState) => state.queue).uri;
  const { playState } = useSelector((state: RootState) => state.player);
  const lib = useSelector((state: RootState) => state.library);
  const optionsRef = useRef<HTMLDivElement>(null);

  console.log(data);
  // destructure data
  if (data) var { name, description, owner, tracks, uri } = data;
  let cover: any, totalTime;

  // close options menu when click outside
  const [showOptions, setShowOptions] = useState<boolean>(false);
  useEffect(() => {
    const clickHandle = (e: any) => {
      if (optionsRef.current && !optionsRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };
    document.body.addEventListener('click', clickHandle);
    return () => document.body.removeEventListener('click', clickHandle);
  }, []);

  // checking if this in library
  const isFav = useMemo<number>(() => {
    if (type === 'track') return lib.list[0].tracks.findIndex((track) => track.uri === data.uri);
    return lib.list.findIndex((item) => item.uri === uri);
  }, [lib, uri, type]);

  // spotify uri like: <a href='spotify:type:id'>name</a> x3 and more
  // convert to [{uri, name}x3]
  function changeSpotifyUriToLocalLink(string: string) {
    let str = string.replace(/<a href=/g, '');
    str = str.replace(/<\/a>/g, '');
    str = str.replace(/and more/g, '');
    str = str.replace(/>/g, ', ');
    let list = str.split(', ');

    let result: Array<any> = [];
    list.forEach((element, index) => {
      if (index % 2 !== 0) {
        result.push({
          uri: list[index - 1],
          name: element,
        });
      }
    });

    return result;
  }

  // config data
  if (data)
    switch (type) {
      case 'playlist':
        cover = data.images?.at(0);
        totalTime = tracks.items?.reduce(
          (prev: number, current: { track: { duration_ms: number } }) => prev + current.track?.duration_ms,
          0,
        );
        break;

      case 'album':
        cover = data.images?.at(0);
        owner = { uri: data.artists[0].uri, display_name: data.artists[0].name };
        totalTime = tracks.items.reduce(
          (prev: number, current: { duration_ms: number }) => prev + current.duration_ms,
          0,
        );
        break;

      case 'track':
        console.log(data);
        cover = data.album.images[0];
        var { album, duration_ms, explicit, artists } = data;
        owner = { uri: artists[0].uri, display_name: artists[0].name };
        break;

      default:
        break;
    }

  const addToLibrary = () => {
    if (type === 'track') {
      dispatch(addTrackToFavorite(data));
      return;
    }
    let item: any;
    switch (type) {
      case 'playlist':
        item = { uri, name, coverArt: cover, creator: owner, tracks, type };
        break;
      case 'album':
        item = { uri, name, coverArt: cover, creator: { ...owner, name: owner.display_name }, tracks, type };
        break;
      default:
        break;
    }
    dispatch(addItem(item));
  };
  const removeFromLibrary = () => {
    if (type === 'track') dispatch(removeTrackFromFavorite(data.uri));
    dispatch(removeItem(isFav));
  };

  return (
    data && (
      <div className={cx('wrapper')}>
        <div className={cx('cover')}>
          <img src={cover && cover.url} alt={name} />
        </div>
        <div className={cx('body')}>
          <div className={cx('type')}>{type === 'track' ? 'Song' : type[0].toUpperCase() + type.slice(1)}</div>
          <div className={cx('name')}>{name}</div>
          <div className={cx('description')}>
            {type === 'playlist' && (
              <>
                {description &&
                  changeSpotifyUriToLocalLink(description).map(({ uri, name }) => (
                    <Link to={linkFromURI(uri)}>{name}</Link>
                  ))}{' '}
                and more
              </>
            )}
            {type === 'album' && description}
          </div>
          <div className={cx('detail')}>
            <div className={cx('owner')}>
              <div className={cx('image')}>
                <img src="" alt="" />
              </div>
              <Link to={linkFromURI(owner.uri)}>{owner.display_name}</Link>
            </div>
            <div className={cx('tracks-count')}>
              {type === 'track' ? (
                <>
                  <Link to={linkFromURI(album.uri)}>{album.name}</Link>
                  <span>{new Date(album.release_date).getFullYear()}</span>
                </>
              ) : (
                tracks.items.length + ' songs'
              )}
            </div>
            <div className={cx('length')}>{type === 'track' ? duration_ms : 'about ' + toTimeString(totalTime)}</div>
          </div>
        </div>
        <div className={cx('buttons')}>
          <div
            className={cx('btn', 'play')}
            onClick={() => {
              if (uri !== playingUri) dispatch(setURI(uri));
              else dispatch(playStateChange(!playState));
            }}
          >
            <div className={cx('icon')}>
              <FontAwesomeIcon icon={uri === playingUri && playState ? faPause : faPlay} />
            </div>
          </div>
          <div className={cx('btn', 'fav')}>
            <div
              className={cx('icon', { fav: isFav !== -1 })}
              onClick={isFav === -1 ? addToLibrary : removeFromLibrary}
            >
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
          <div className={cx('btn', 'opt')} ref={optionsRef}>
            <div
              className={cx('icon')}
              onClick={() => {
                setShowOptions((isShown) => !isShown);
              }}
            >
              <FontAwesomeIcon icon={faEllipsis} />
            </div>

            {showOptions && (
              <div className={cx('options')}>
                <div className={cx('option')}>Add to queue</div>
                <div
                  className={cx('option')}
                  onClick={() => {
                    if (isFav === -1) addToLibrary();
                    else removeFromLibrary();
                    setShowOptions(false);
                  }}
                >
                  {isFav === -1 ? 'Add to Your Library' : 'Remove from Your Library'}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
}
