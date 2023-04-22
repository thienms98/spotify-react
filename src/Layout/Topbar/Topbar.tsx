import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search } from 'src/components/Search';
import { Navigate } from 'src/components/Navigate';

import classNames from 'classnames/bind';
import styles from './Topbar.module.scss';
const cx = classNames.bind(styles);

export default function Topbar() {
  const [sticky, setSticky] = useState<0 | 1 | 2>(0);
  const location = useLocation();
  useEffect(() => {
    const makeSticky = () => {
      if (window.scrollY > 100) setSticky(2);
      else if (window.scrollY > 10) setSticky(1);
      else setSticky(0);
    };

    document.addEventListener('scroll', makeSticky);
    return () => document.removeEventListener('scroll', makeSticky);
  }, []);

  return (
    <div className={cx('wrapper', { sticky: sticky !== 0 })}>
      <div className={cx('background', { half: sticky === 1 }, { full: sticky === 2 })}></div>
      <Navigate />
      {location.pathname.includes('search') && <Search />}
    </div>
  );
}
