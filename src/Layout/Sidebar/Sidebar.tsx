import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

export default function Sidebar() {
  return (
    <div className={cx('wrapper')}>
      <Link to={'/'}>Home</Link>
      <br />
      <Link to={'/search'}>Search</Link>
    </div>
  );
}
