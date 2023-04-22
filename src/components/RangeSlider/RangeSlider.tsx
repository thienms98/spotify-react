import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './RangeSlider.module.scss';
const cx = classNames.bind(styles);

interface Props {
  current: number;
  max: number;
  changeHandler: Function;
}

export default function RangeSlider({ current, max, changeHandler }: Props) {
  return (
    <div className={cx('wrapper')}>
      <input
        title={current.toString()}
        type="range"
        value={current}
        max={max}
        onChange={(e) => {
          changeHandler(e.target.value);
        }}
      />
    </div>
  );
}
