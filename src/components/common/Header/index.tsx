import Search from './Search';
import ToolList from './ToolList';
import style from './styles/index.module.scss';

function Header() {
  return (
    <div className={style['header-wrapper']}>
      <header className={style.header}>
        <div className={style['search-wrapper']}>
          <Search />
        </div>
        <div className={style['tool-list-wrapper']}>
          <div className={style['tool-list-inner-wrapper']}>
            <ToolList />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
