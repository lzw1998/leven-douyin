import classNames from 'classnames/bind';
import { useState } from 'react';
import useDebounceFn from 'src/hooks/useDebounceFn';
import toolListStyle from '../styles/ToolList.module.scss';

interface moreProps {
  activeClassName: string;
  changeType: (...args: any[]) => void;
}

const cx = classNames.bind(toolListStyle);
function More({ activeClassName, changeType }: moreProps) {
  const { run } = useDebounceFn(
    (value) => {
      changeType(value);
    },
    {
      wait: 200,
    },
  );

  const handleMouseEnter = () => {
    run('active');
  };
  const handleMouseLeave = () => {
    run('');
  };
  return (
    <li className={cx('tool-more', activeClassName)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div>
        <div className={cx('btn-wrapper')}>
          <svg className={cx('btn-icon')}>
            <use href='#list' />
          </svg>
        </div>
        <ul className={cx('more-menu')}>
          <li className={cx('more-tool-upload')}>发布视频</li>
          <li className={cx('more-tool-about')}>关于抖音</li>
          <li>下载抖音</li>
          <li>创作者服务</li>
          <li>透明度报告</li>
        </ul>
      </div>
    </li>
  );
}
export default More;
