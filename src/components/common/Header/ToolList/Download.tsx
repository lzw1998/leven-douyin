import classNames from 'classnames/bind';
import { useState } from 'react';
import useDebounce from 'src/hooks/useDebounce';
import Logo from 'src/assets/douyin-logo.png';
import toolListStyle from '../styles/ToolList.module.scss';

const cx = classNames.bind(toolListStyle);

function Download() {
  const [isDownloadActive, setIsDownloadActive] = useState<boolean>(false);
  const debouncedIsDownloadActive = useDebounce(isDownloadActive, {
    wait: 200,
  });

  const handleMouseEnter = () => {
    setIsDownloadActive(true);
  };
  const handleMouseLeave = () => {
    setIsDownloadActive(false);
  };
  return (
    <li className={cx('tool-download')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div
        className={cx('download-wrapper', {
          active: debouncedIsDownloadActive,
        })}
      >
        <div className={cx('download-placeholder')} />
        <div className={cx('douyin-logo-wrapper')}>
          <img src={Logo} alt='douyin_icon' className={cx('douyin-logo')} />
        </div>
        <p className={cx('download-label')}>安装后可以在桌面快捷访问抖音</p>
        <div className={cx('download-btn')}>添加到桌面</div>
      </div>
      <a href='#download'>下载抖音</a>
    </li>
  );
}

export default Download;
