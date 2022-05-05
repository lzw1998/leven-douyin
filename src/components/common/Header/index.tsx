import style from './styles/index.module.scss';

function Header() {
  return (
    <div className={style['header-wrapper']}>
      <header className={style['douyin-header']}>
        <div>left</div>
        <div>right</div>
      </header>
    </div>
  );
}

export default Header;
