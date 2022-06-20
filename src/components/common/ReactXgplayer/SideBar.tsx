import { useEffect } from 'react';
import classNames from 'classnames/bind';
import { Up, Down } from '@icon-park/react';
import avatarImg from 'src/assets/avatar.jpeg';
import Avatar from 'src/components/common/Avatar';
import sidebarStyle from './styles/sidebar.module.scss';

const cx = classNames.bind(sidebarStyle);

function SideBar() {
  return (
    <div className={cx('sidebar-container')}>
      <div className={cx('sidebar-playswitch')}>
        <div className={cx('playswitch-tab')}>
          <div className={cx('playswitch-prev')}>
            <Up theme='filled' size='24' fill='#fff' className={cx('icon-wrapper')} />
          </div>
          <div className={cx('playswitch-next')}>
            <Down theme='filled' size='24' fill='#fff' className={cx('icon-wrapper')} />
          </div>
        </div>
      </div>
      <div className={cx('sidebar-interaction')}>
        <div className={cx('position-relative')}>
          <Avatar src={avatarImg} shape='circle' size={40} />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
