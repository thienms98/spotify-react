import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Navigate.module.scss';
const cx = classNames.bind(styles);

export default function Navigate() {
  // const history = window.history;

  return (
    <div className={cx('wrapper')}>
      <button
        className={cx('back-button')}
        onClick={() => {
          // history.back();
        }}
        title="back-button"
        type="button"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className={cx('forward-button')}
        onClick={() => {
          // history.forward();
        }}
        title="forward-button"
        type="button"
        disabled
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}
