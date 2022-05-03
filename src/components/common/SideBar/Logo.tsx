import style from './styles/index.module.scss';

function Logo() {
  return (
    <div className={style['logo-container']}>
      <div className={style['logo-wrapper']}>
        <a href='/' className={style.logo} />
      </div>
    </div>
  );
}

export default Logo;
