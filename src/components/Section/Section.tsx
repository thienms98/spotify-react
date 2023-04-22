import classNames from 'classnames/bind';
import styles from './Section.module.scss';
const cx = classNames.bind(styles);

interface CompProps {
  title: string;
  expandable: boolean;
  children: React.ReactNode;
}

export default function Section({ title, expandable = false, children }: CompProps) {
  return (
    <section>
      <div className={cx('head')}>
        <div className={cx('title')}>
          <span>{title}</span>
        </div>
        <div className={cx('expand')}>Show all</div>
      </div>
      {children}
    </section>
  );
}
