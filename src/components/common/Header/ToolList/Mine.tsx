import classNames from 'classnames/bind';
import { useState } from 'react';
import useDebounce from 'src/hooks/useDebounce';
import avatarImg from 'src/assets/avatar.jpeg';
import logoHeart from 'src/assets/heart.svg';
import logoHistory from 'src/assets/history.svg';
import logoPlay from 'src/assets/play.svg';
import logoStar from 'src/assets/star.svg';

import toolListStyle from '../styles/ToolList.module.scss';

const cx = classNames.bind(toolListStyle);

interface mineProps {
  avatarUrl: string;
  awemeCollectCount: number;
  awemeCount: number;
  favoritingCount: number;
}

function Mine({ avatarUrl, awemeCollectCount, awemeCount, favoritingCount }: mineProps) {
  const [isMineActive, setIsMineActive] = useState<boolean>();

  const debouncedIsMineActive = useDebounce(isMineActive, {
    wait: 200,
  });

  const handleMouseEnter = () => {
    setIsMineActive(true);
  };
  const handleMouseLeave = () => {
    setIsMineActive(false);
  };
  return (
    <li className={cx('tool-mine')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a href={avatarUrl} className={cx('tool-avatar')}>
        <div className={cx('avatar-wrapper')}>
          <img className={cx('avatar')} src={avatarImg} alt='avatar' />
        </div>
      </a>
      <ul
        className={cx('mine-overlay', {
          active: debouncedIsMineActive,
        })}
      >
        <div className={cx('mine-container')}>
          <ul className={cx('mine-infos')}>
            <ul className={cx('mine-info-item-container')}>
              <a className={cx('mine-info-item-wrapper')} href='#personal'>
                <li className={cx('mine-info-item')}>
                  <img className={cx('mine-info-item-icon')} src={logoPlay} alt='personal_channel' />
                  <p className={cx('mine-info-item-num')}>{awemeCount}</p>
                  <p className={cx('mine-info-item-label')}>我的作品</p>
                </li>
              </a>
              <div className={cx('vertical-divider')} />
            </ul>
            <ul className={cx('mine-info-item-container')}>
              <a className={cx('mine-info-item-wrapper')} href='#favoriting'>
                <li className={cx('mine-info-item')}>
                  <img className={cx('mine-info-item-icon')} src={logoHeart} alt='favoriting' />
                  <p className={cx('mine-info-item-num')}>{favoritingCount}</p>
                  <p className={cx('mine-info-item-label')}>我的喜欢</p>
                </li>
              </a>
              <div className={cx('vertical-divider')} />
            </ul>
            <ul className={cx('mine-info-item-container')}>
              <a className={cx('mine-info-item-wrapper')} href='#collect'>
                <li className={cx('mine-info-item')}>
                  <img className={cx('mine-info-item-icon')} src={logoStar} alt='collect' />
                  <p className={cx('mine-info-item-num')}>{awemeCollectCount}</p>
                  <p className={cx('mine-info-item-label')}>我的收藏</p>
                </li>
              </a>
              <div className={cx('vertical-divider')} />
            </ul>
            <ul className={cx('mine-info-item-container')}>
              <a className={cx('mine-info-item-wrapper')} href='#personal'>
                <li className={cx('mine-info-item')}>
                  <img className={cx('mine-info-item-icon')} src={logoHistory} alt='history' />
                  <p className={cx('mine-info-item-num')}>
                    30
                    <span className={cx('surplus-text')}>天内</span>
                  </p>
                  <p className={cx('mine-info-item-label')}>观看历史</p>
                </li>
              </a>
            </ul>
          </ul>
          <div className={cx('horizonal-divider')} />
          <div className={cx('mine-options')}>
            <li>
              <a href='#home'>个人主页</a>
            </li>
            <li>
              <a href='#recharge'>抖币充值</a>
            </li>
            <li>
              <a href='#streamingtool'>直播伴侣</a>
            </li>
            <li>
              <span>退出登录 </span>
            </li>
          </div>
        </div>
      </ul>
    </li>
  );
}

export default Mine;
