import React from 'react';
import classNames from 'classnames/bind';
import styles from './Artist.module.scss';
const cx = classNames.bind(styles);

const Artist = () => {
  return <div className={cx('wrapper')}>artist</div>;
};

export default Artist;
