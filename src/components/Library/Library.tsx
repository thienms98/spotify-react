import { useState, useRef, useEffect } from 'react';
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
  let { list } = useSelector((state: RootState) => state.library);
  const [libraryItems, setLibraryItems] = useState<Array<any>>([]);

  // filter options
  const [searchString, setSearchString] = useState<string>('');
  const [sort, setSort] = useState<string>('Recents');
  const [type, setType] = useState<string>('');

  // ui interaction
  const [ctxMenu, setCtxMenu] = useState<number>(-1);
  const [showSort, setShowSort] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const sortOptiosRef = useRef<HTMLDivElement>(null);

  // close sort options when click outside
  useEffect(() => {
    const closeMenu = (e: any) => {
      if (sortOptiosRef.current && !sortOptiosRef.current.contains(e.target)) {
        setShowSort(false);
      }
    };
    document.body.addEventListener('click', closeMenu);
    return () => document.body.removeEventListener('click', closeMenu);
  }, []);

  // update items onchange
  useEffect(() => {
    setLibraryItems(list);
  }, [list]);

  // set list order by sort option
  useEffect(() => {
    switch (sort) {
      case 'Recents':
        break;
      case 'Recently Added':
        setLibraryItems((ls: any) => [...ls].sort((a: any, b: any) => a.createdTime - b.createdTime));
        break;
      case 'Alphabetical':
        setLibraryItems((ls: any) => [...ls].sort((a: any, b: any) => a.name - b.name));
        break;
      case 'Creator':
        setLibraryItems((ls: any) => [...ls].sort((a: any, b: any) => a.creator.name - b.creator.name));
        break;
      default:
        break;
    }
  }, [sort]);

  // sort list by type
  useEffect(() => {
    setLibraryItems((list: any) => {
      if (type === '') return list;
      return list.filter((item: any) => item.type.includes(type));
    });
  }, [type, list]);

  // show item match search text
  useEffect(() => {
    const searchlist = [...list].filter((item: any, index: number) => {
      return item.name?.toLowerCase().includes(searchString) || item.creator.name?.toLowerCase().includes(searchString);
    });
    setLibraryItems(searchlist);
  }, [list, searchString]);

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
          {type !== '' && (
            <div className={cx('close-btn')} onClick={() => setType('')}>
              x
            </div>
          )}
          {type !== 'album' && (
            <div className={cx('tags-item')} onClick={() => setType((type) => (type === 'playlist' ? '' : 'playlist'))}>
              Playlists
            </div>
          )}
          {type !== 'playlist' && type !== 'self' && (
            <div className={cx('tags-item')} onClick={() => setType((type) => (type === 'album' ? '' : 'album'))}>
              Albums
            </div>
          )}
          {(type === 'playlist' || type === 'self') && (
            <div className={cx('tags-item')} onClick={() => setType((type) => (type === 'self' ? 'playlist' : 'self'))}>
              By You
            </div>
          )}
        </div>
        <div className={cx('row', { 'show-input': searchString.trim().length > 0 })}>
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
              <input
                type="text"
                ref={searchRef}
                placeholder="Search In Your Library"
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
              />
            </div>
          </div>

          <div className={cx('sort')} ref={sortOptiosRef}>
            <div className={cx('toggle')} onClick={() => setShowSort((prev) => !prev)}>
              {sort}
            </div>
            {showSort && (
              <div className={cx('list')}>
                <div className={cx('title')}>Sort by</div>
                <div className={cx('list-items')}>
                  {['Recents', 'Recently Added', 'Alphabetical', 'Creator'].map((item) => (
                    <div
                      className={cx('list-item', { selected: item === sort })}
                      key={item}
                      onClick={() => {
                        setSort(item);
                        setShowSort(false);
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={cx('list')}>
        {libraryItems.length ? (
          libraryItems.map((item: any, index: number) => {
            if (item.type === 'liked' && item.tracks.length === 0) return '';
            return <LibraryItem item={item} enlarge={enlarge} index={index} key={index} />;
          })
        ) : searchString.length > 0 ? (
          <>Couldn't find "{searchString}"</>
        ) : (
          'No result'
        )}
      </div>
    </div>
  );
}
