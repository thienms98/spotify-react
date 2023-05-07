import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from 'src/hooks/useDebounce';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

export default function Search() {
  const navigate = useNavigate();
  const { query } = useParams();

  const [searchText, setSearchText] = useState<string>(query || '');
  const debounce = useDebounce(searchText, 500);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (debounce.trim()) navigate(`/search/${debounce.trim()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('icon')}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <input
        type="text"
        name=""
        value={searchText}
        ref={inputRef}
        placeholder="What do you want listen to?"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        tabIndex={1}
      />
      {searchText.trim() && (
        <div
          className={cx('icon')}
          onClick={() => {
            setSearchText(' ');
            inputRef.current?.focus();
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
      )}
    </div>
  );
}
