import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faHeart, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { linkFromURI, timeFormater } from 'src/utils';

import classNames from 'classnames/bind';
import styles from './Track.module.scss';
const cx = classNames.bind(styles);

interface TrackData {
  uri: string;
  artists: { uri: string; profile: { name: string } }[];
  name: string;
  duration: { totalMilliseconds: number };
  image: { url: string; width: number; height: number };
  album: {} | null;
}

interface TrackProps {
  data: TrackData;
  playHandle: Function;
}

export default function Track({ data, playHandle }: TrackProps) {
  return (
    <div className={cx('wrapper')} key={data.uri.split(':')[2]}>
      <div
        className={cx('image')}
        title={`Play ${data.name} by ${
          data.artists.reduce((prev: any, current: any) => {
            return {
              uri: '',
              profile: { name: prev.profile.name + ', ' + current.profile.name },
            };
          }).profile.name
        }`}
      >
        <img src={data.image.url} alt="" />
        <div className={cx('play-btn')} onClick={() => playHandle()}>
          <FontAwesomeIcon icon={faPlay} />
        </div>
      </div>
      <div className={cx('text')}>
        <div className={cx('name')}>
          <Link to={linkFromURI(data.uri)}>{data.name}</Link>
        </div>
        <div className={cx('artist')}>
          {data.artists.map((art: any) => {
            return (
              <Link to={linkFromURI(art.uri)} key={art.uri}>
                {art.profile.name}
              </Link>
            );
          })}
        </div>
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
  );
}
