import { useState, useRef, RefObject, useEffect } from 'react';
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
  const [ctxMenu, setCtxMenu] = useState(-1);
  const [sort, setSort] = useState('Recents');
  const searchRef = useRef<HTMLInputElement | null>(null);

  const showContextMenu = (index: number) => {
    setCtxMenu(index);
  };

  // useEffect(() => {
  //   switch (sort) {
  //     case 'Recents':
  //       break;
  //     case 'Recently Added':
  //       list.sort((a: any, b: any) => a.createdTime - b.createdTime);
  //       break;
  //     case 'Alphabetical':
  //       list.sort((a: any, b: any) => a.name - b.name);
  //       break;
  //     case 'Creator':
  //       list.sort((a: any, b: any) => a.creator.name - b.creator.name);
  //       break;
  //     default:
  //       break;
  //   }
  // }, [sort]);

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
      <div className={cx('filter')}>
        <div className={cx('tags')}>
          <div className={cx('close-btn')}></div>
          <div className={cx('tags-item')}>Playlists</div>
          <div className={cx('tags-item')}>By You</div>
          <div className={cx('tags-item')}>Albums</div>
        </div>
        <div className={cx('row')}>
          <div className={cx('search')}>
            <button
              className={cx('icon')}
              type="button"
              title="find"
              onClick={() => {
                console.log('clicked');
                searchRef.current?.focus();
              }}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <div className={cx('input')}>
              <input type="text" ref={searchRef} placeholder="Search In Your Library" />
            </div>
          </div>

          <div className={cx('sort')}>
            <div className={cx('toggle')}>{sort}</div>
            <div className={cx('list')}>
              <div className={cx('title')}>Sort by</div>
              <div className={cx('list-items')}>
                {['Recents', 'Recently Added', 'Alphabetical', 'Creator'].map((item) => (
                  <div
                    className={cx('list-item', { selected: item === sort })}
                    key={item}
                    onClick={() => setSort(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('list')}>
        {list.map((item: any, index: number) => {
          return (
            <LibraryItem
              item={item}
              enlarge={enlarge}
              index={index}
              showContextMenu={showContextMenu}
              isContextOpen={ctxMenu === index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
