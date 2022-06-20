import classNames from 'classnames/bind';
import toolListStyle from '../styles/ToolList.module.scss';

const cx = classNames.bind(toolListStyle);

function Creator() {
  return (
    <li className={cx('tool-creator')}>
      <a href='#creator'>创作者服务</a>
    </li>
  );
}

export default Creator;
