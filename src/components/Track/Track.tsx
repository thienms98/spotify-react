import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { Link } from 'react-router-dom';

import { linkFromURI, timeFormater } from 'src/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faHeart, faEllipsis } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Track.module.scss';
const cx = classNames.bind(styles);

interface TrackData {
  uri: string;
  explicit: boolean;
  artists: { uri: string; profile: { name: string } }[];
  name: string;
  duration: { totalMilliseconds: number };
  image: { url: string; width: number; height: number };
  album: {
    name: string;
    uri: string;
  } | null;
}

export default function Track({
  index = 0,
  data,
  playHandle,
}: {
  index: number;
  data: TrackData;
  playHandle: Function;
}) {
  const queue = useSelector((state: RootState) => state.queue);
  const { playState } = useSelector((state: RootState) => state.player);

  return (
    data && (
      <div className={cx('wrapper', { short: index === 0 })} key={data.uri?.split(':')[2]}>
        <div className={cx('index')}>{index !== 0 && index}</div>
        <div
          className={cx('image')}
          title={`Play ${data.name} by ${
            data.artists?.reduce((prev: any, current: any) => {
              return {
                uri: '',
                profile: { name: prev.profile.name + ', ' + current.profile.name },
              };
            }).profile.name
          }`}
        >
          <img src={data.image?.url} alt="" />
          <div
            className={cx('play-btn', {
              shown: data.uri === queue.list[queue.currentIndex]?.uri && playState,
            })}
            onClick={() => playHandle()}
          >
            <FontAwesomeIcon icon={data.uri === queue.list[queue.currentIndex]?.uri && playState ? faPause : faPlay} />
          </div>
        </div>
        <div className={cx('text')}>
          <div className={cx('name')}>
            <Link to={linkFromURI(data.uri)}>{data.name}</Link>
          </div>
          <div className={cx('detail')}>
            {data.explicit && <span>E</span>}
            <div className={cx('artist')}>
              {data.artists?.map((art: any) => {
                return (
                  <Link to={linkFromURI(art.uri)} key={art.uri}>
                    {art.profile.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className={cx('album')}>
          {data.album && <Link to={linkFromURI(data.album.uri)}>{data.album.name}</Link>}
        </div>
        <div className={cx('more')}>
          <div className={cx('fav')}>
            <div className={cx('icon')}>
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
          <div className={cx('duration')}>{timeFormater(Math.round(data.duration.totalMilliseconds / 1000))}</div>
          <div className={cx('menu')}>
            <div className={cx('icon')}>
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

Track.defaultProps = {
  index: 0,
};
