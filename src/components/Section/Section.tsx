import classNames from 'classnames/bind';
import styles from './Section.module.scss';
const cx = classNames.bind(styles);

export default function Section({
  title,
  expandable = false,
  children,
}: {
  title: string;
  expandable: boolean;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className={cx('head')}>
        <div className={cx('title')}>
          <span>{title}</span>
        </div>
        {expandable && <div className={cx('expand')}>Show all</div>}
      </div>
      {children}
    </section>
  );
}
