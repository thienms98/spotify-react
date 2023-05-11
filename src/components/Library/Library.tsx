import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

import { LibraryItem } from '../LibraryItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolder,
  faPlus,
  faArrowLeft,
  faArrowRight,
  faList,
  faTableCellsLarge,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Library.module.scss';
const cx = classNames.bind(styles);

interface LibraryProps {
  isCollapse: boolean;
  isEnlarge: boolean;
  collapse: any;
  enlarge: any;
}

export default function Library({ isCollapse, isEnlarge, collapse, enlarge }: LibraryProps) {
  const { list } = useSelector((state: RootState) => state.library);

  return (
    <div className={cx('wrapper', { collapse: isCollapse })}>
      <div className={cx('head')}>
        <div
          className={cx('lib')}
          title={isCollapse ? 'Expand Your Library' : 'Collapse Your Library'}
          onClick={() => collapse()}
        >
          <div className={cx('icon', 'lib-icon')}>
            <FontAwesomeIcon icon={faFolder} />
          </div>
          <span>Your Library</span>
        </div>
        <div className={cx('icon')} title={'Create playlist or folder'}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        {isEnlarge && (
          <div className={cx('icon')} title={'Create playlist or folder'}>
            <FontAwesomeIcon icon={faList} />
            <FontAwesomeIcon icon={faTableCellsLarge} />
          </div>
        )}
        <div
          className={cx('icon')}
          title={isEnlarge ? 'Reduce Your Library' : 'Enlarge Your Library'}
          onClick={() => enlarge()}
        >
          <FontAwesomeIcon icon={isEnlarge ? faArrowLeft : faArrowRight} />
        </div>
      </div>
      <div className={cx('sort')}>
        <div className={cx('tags')}>
          <div className={cx('close-btn')}></div>
          <div className={cx('tags-item')}>Playlists</div>
          <div className={cx('tags-item')}>By You</div>
          <div className={cx('tags-item')}>Albums</div>
        </div>
        <div className={cx('')}>
          <div className={cx('search')}>
            <div className={cx('icon')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className={cx('input')}>
              <input type="text" placeholder="Search In Your Library" />
            </div>
          </div>

          <div className={cx('sort')}>
            <div className={cx('toggle')}>Recents</div>
            <div className={cx('list')}>
              <div className={cx('title')}>Sort by</div>
              <div className={cx('items')}>
                <div className={cx('item')}>Recents</div>
                <div className={cx('item')}>Recently Added</div>
                <div className={cx('item')}>Alphabetical</div>
                <div className={cx('item')}>Creator</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('list')}>
        {list.map((item: any, index: number) => {
          return <LibraryItem item={item} enlarge={enlarge} index={index} key={index} />;
        })}
      </div>
    </div>
  );
}
