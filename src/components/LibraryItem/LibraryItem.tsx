import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { linkFromURI } from 'src/utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import { switchPinItem, removeItem } from 'src/redux/reducers/library';

import classNames from 'classnames/bind';
import styles from './LibraryItem.module.scss';
const cx = classNames.bind(styles);

export default function LibraryItem({
  item,
  enlarge,
  index,
  isContextOpen,
  showContextMenu,
}: {
  item: any;
  enlarge: boolean;
  index: number;
  isContextOpen: boolean;
  showContextMenu: any;
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { uri, name, coverArt, creator, pinned, tracks, type } = item;

  return (
    <div
      className={cx('list-item')}
      onContextMenu={(e) => {
        e.preventDefault();
        showContextMenu(index);
      }}
      onBlur={() => {
        showContextMenu(-1);
      }}
    >
      <div className={cx('image')} onClick={() => navigate(linkFromURI(uri))}>
        <img src={coverArt.url} alt="" width={48} loading="lazy" />
      </div>
      <div className={cx('text')} onClick={() => navigate(linkFromURI(uri))}>
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

      {isContextOpen && (
        <div className={cx('contextMenu')}>
          <div
            className={cx('menu-item')}
            onClick={() => {
              dispatch(switchPinItem(index));
              showContextMenu(-1);
            }}
          >
            {pinned ? 'Unpin' : 'Pin'} {type === 'album' ? 'album' : 'playlist'}
          </div>
          <div
            className={cx('menu-item')}
            onClick={() => {
              dispatch(removeItem(index));
              showContextMenu(-1);
            }}
          >
            Remove From Library
          </div>
          <div className={cx('menu-item')} onClick={() => showContextMenu(-1)}>
            Close
          </div>
        </div>
      )}
    </div>
  );
}
