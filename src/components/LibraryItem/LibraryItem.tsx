import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { linkFromURI } from 'src/utils';

import { Options, OptionsItem } from 'src/components/Options';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import { switchPinItem, removeItem } from 'src/redux/reducers/library';

import classNames from 'classnames/bind';
import styles from './LibraryItem.module.scss';
const cx = classNames.bind(styles);

export default function LibraryItem({ item, enlarge, index }: { item: any; enlarge: boolean; index: number }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { uri, name, coverArt, creator, pinned, tracks, type } = item;
  const [showContext, setShowContext] = useState(false);

  // add click event, when click outside context menu => close menu
  const contextMenuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctxMenuClicked = (e: any) => {
      if (contextMenuRef.current && !contextMenuRef.current.contains(e.target)) {
        setShowContext(false);
      }
    };

    document.body.addEventListener('click', ctxMenuClicked);
    return () => document.body.removeEventListener('click', ctxMenuClicked);
  }, []);

  return (
    <div className={cx('list-item')} onContextMenu={() => setShowContext(true)}>
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
          <div className={cx('type')}>
            {type === 'album' ? 'album' : 'playlist'}
            <span></span>
            {type === 'liked' ? tracks.length : creator.name}
          </div>
          <div className={cx('')}></div>
        </div>
      </div>
      <div className={cx('date')}></div>
      <div className={cx('played')}></div>

      {showContext && (
        <Options ref={contextMenuRef}>
          <OptionsItem
            onClick={() => {
              dispatch(switchPinItem(index));
              setShowContext(false);
            }}
            onContextMenu={() => setShowContext(true)}
          >
            {pinned ? 'Unpin' : 'Pin'} {type === 'album' ? 'album' : 'playlist'}
          </OptionsItem>
          <OptionsItem
            onClick={() => {
              dispatch(removeItem(index));
              setShowContext(false);
            }}
          >
            Remove From Library
          </OptionsItem>
        </Options>
      )}
    </div>
  );
}
