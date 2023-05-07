import classNames from 'classnames/bind';
import styles from './Track.module.scss';
const cx = classNames.bind(styles);

export default function Track() {
  return <div className={cx('wrapper')}></div>;
}
