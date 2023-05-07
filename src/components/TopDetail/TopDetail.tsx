import { useState } from 'react';
import { Link } from 'react-router-dom';
import { linkFromURI } from 'src/utils';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { setURI } from 'src/redux/reducers/queue';
import { playStateChange } from 'src/redux/reducers/player';

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
  const playingUri = useSelector((state: RootState) => state.queue).uri;
  const { playState } = useSelector((state: RootState) => state.player);
  const dispatch = useDispatch();
  if (data) var { name, description, owner, tracks, uri } = data;

  const [showOptions, setShowOptions] = useState<boolean>(false);

  // config data
  if (data)
    switch (type) {
      case 'playlist':
        var cover = data.images?.at(0);
        var totalTime = tracks.items.reduce(
          (prev: number, current: { track: { duration_ms: number } }) => prev + current.track.duration_ms,
          0,
        );
        break;
      case 'album':
        break;
      default:
        break;
    }

  return (
    data && (
      <div className={cx('wrapper')}>
        {
          /* close options popup, prevent interact with others when options popup shown */
          showOptions && <div className={cx('overlay')} onClick={() => setShowOptions(false)}></div>
        }
        <div className={cx('cover')}>
          <img src={cover?.url} alt={name} />
        </div>
        <div className={cx('body')}>
          <div className={cx('type')}>
            {type[0].toUpperCase()}
            {type.slice(1)}
          </div>
          <div className={cx('name')}>{name}</div>
          <div className={cx('description')}>{description}</div>
          <div className={cx('detail')}>
            <div className={cx('owner')}>
              <div className={cx('image')}>
                <img src="" alt="" />
              </div>
              <Link to={linkFromURI(owner.uri)}>{owner.display_name}</Link>
            </div>
            <div className={cx('tracks-count')}>{tracks.items.length} songs</div>
            <div className={cx('length')}>about {toTimeString(totalTime)}</div>
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
            <div className={cx('icon')}>
              {' '}
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
          <div className={cx('btn', 'opt')}>
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
                <div className={cx('option')}>Add to Your Library</div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
}
