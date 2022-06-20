import { ChangeEvent, useState } from 'react';
import searchStyle from './styles/Search.module.scss';

function Search() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPlaceholder, setsearchPlaceholder] = useState('结婚契约');

  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className={`${searchStyle.search} ${searchStyle['global-search']}`}>
      <div className={searchStyle['search-input-wrapper']}>
        <input
          className={`${searchStyle['search-input']}${isFocused ? '' : ` ${searchStyle.unfocus}`}`}
          type='text'
          maxLength={100}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleChange}
        />
        {isFocused || searchQuery !== '' ? (
          ''
        ) : (
          <div className={searchStyle['search-placeholder']}>{searchPlaceholder}</div>
        )}
      </div>
      <div className={searchStyle['search-btn']}>
        <svg className={searchStyle['btn-icon']}>
          <use href='#search' />
        </svg>
        <span className={searchStyle['btn-title']}>搜索</span>
      </div>
    </div>
  );
}

export default Search;
