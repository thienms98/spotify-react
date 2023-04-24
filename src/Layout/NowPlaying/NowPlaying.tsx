import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { volumeChange } from 'src/redux/reducers/player';
import { RootState } from 'src/redux/store';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faList } from '@fortawesome/free-solid-svg-icons';
import { Player } from 'src/components/Player';
import { RangeSlider } from 'src/components/RangeSlider';

import classNames from 'classnames/bind';
import styles from './NowPlaying.module.scss';
const cx = classNames.bind(styles);

export default function NowPlaying() {
  const queue = useSelector((state: RootState) => state.queue);
  const player = useSelector((state: RootState) => state.player);
  const dispatch = useDispatch();

  const track = queue.list[queue.currentIndex];

  // fetch('https://accounts.spotify.com/api/token', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_CLIENTID}&client_secret=${process.env.REACT_APP_CLIENTSECRET}`,
  // // });
  // console.log(process.env.REACT_APP_CLIENTID);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('detail')}>
        <div className={cx('image')}>
          <img src={track.image?.url || ''} alt={track.name} />
        </div>
        <div className={cx('text')}>
          <div className={cx('name')}>{track.name}</div>
          <div className={cx('artists')}>
            {track.artists.map((artist: any) => {
              return (
                <span className={cx('item')} key={artist.id}>
                  <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
                </span>
              );
            })}
          </div>
        </div>
        <div className={cx('btns')}>
          <div className={cx('btn')}>
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>
      <div className={cx('player-control')}>
        <Player />
      </div>
      <div className={cx('more')}>
        <Link to={'/queue'}>
          <FontAwesomeIcon icon={faList} />
        </Link>
        <RangeSlider current={player.volume} max={100} changeHandler={(num: number) => dispatch(volumeChange(num))} />
      </div>
    </div>
  );
}
