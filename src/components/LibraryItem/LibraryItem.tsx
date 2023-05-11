import { useState } from 'react';
import { Link } from 'react-router-dom';
import { linkFromURI } from 'src/utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './LibraryItem.module.scss';
import { MouseEventHandler } from 'react';
const cx = classNames.bind(styles);

export default function LibraryItem({ item, enlarge, index }: { item: any; enlarge: boolean; index: number }) {
  const { uri, name, coverArt, creator, pinned, tracks, type } = item;

  const [ctxMenu, setCtxMenu] = useState(false);
  const showContextMenu = (e: any) => {
    e.preventDefault();
    setCtxMenu(true);
  };
  return (
    <Link className={cx('list-item')} to={linkFromURI(uri)} onContextMenu={showContextMenu}>
      <div className={cx('image')}>
        <img src={coverArt.url} alt="" width={48} loading="lazy" />
      </div>
      <div className={cx('text')}>
        <div className={cx('name')}>{name}</div>
        <div className={cx('detail')}>
          {pinned && (
            <div className={cx('pin')}>
              <FontAwesomeIcon icon={faThumbTack} />
            </div>
          )}
          <div className={cx('type')}>{type}</div>
          <div className={cx('')}></div>
        </div>
      </div>
      <div className={cx('date')}></div>
      <div className={cx('played')}></div>

      {ctxMenu && (
        <div className={cx('contextMenu')}>
          <div className={cx('menu-item')}>Pin {type === 'album' ? 'album' : 'playlist'}</div>
          <div className={cx('menu-item')}>Remove From Library</div>
        </div>
      )}
    </Link>
  );
}

LibraryItem.defaultProps = {
  liked: false,
};
