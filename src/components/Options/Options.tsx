import { forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import styles from './Options.module.scss';
const cx = classNames.bind(styles);

const Options = forwardRef((props: PropsWithChildren<any>, ref: any) => {
  return (
    <div ref={ref} className={cx('contextMenu')} {...props}>
      {props.children}
    </div>
  );
});

const OptionsItem = (props: PropsWithChildren<any>) => {
  return (
    <div className={cx('menu-item')} {...props}>
      {props.children}
    </div>
  );
};

export { Options, OptionsItem };
