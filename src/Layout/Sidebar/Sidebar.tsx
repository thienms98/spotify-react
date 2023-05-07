import { Link } from 'react-router-dom';
import { SpotifyLogo } from 'src/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

export default function Sidebar() {
  return (
    <div className={cx('wrapper')}>
      <Link to={'/'}>
        <SpotifyLogo />
      </Link>
      <br />
      <Link to={'/search'}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        Search
      </Link>
    </div>
  );
}
