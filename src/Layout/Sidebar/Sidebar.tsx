import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Library } from 'src/components/Library';

import { SpotifyLogo } from 'src/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

export default function Sidebar() {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);
  const [isEnlarge, setIsEnlarge] = useState<boolean>(false);

  return (
    <div className={cx('wrapper', { enlarge: isEnlarge })}>
      <div className={cx('box')}>
        <Link to={'/'}>
          <SpotifyLogo />
        </Link>
        <br />
        <Link to={'/search'}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          Search
        </Link>
      </div>
      <div className={cx('box')}>
        <Library
          isCollapse={isCollapse}
          isEnlarge={isEnlarge}
          collapse={() => setIsCollapse((prev) => !prev)}
          enlarge={() => setIsEnlarge((prev) => !prev)}
        />
      </div>
    </div>
  );
}
