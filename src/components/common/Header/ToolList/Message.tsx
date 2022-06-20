import classNames from 'classnames/bind';
import { useState } from 'react';
import useDebounce from 'src/hooks/useDebounce';
import Avatar from 'src/assets/douyin-logo.png';
import toolListStyle from '../styles/ToolList.module.scss';

const cx = classNames.bind(toolListStyle);
function Message() {
  const [isMessageActive, setIsMessageActive] = useState<boolean>(false);
  const [messageList, setMessageList] = useState([
    {
      id: '1',
      name: '喵',
      content: '暂不支持该类型',
      time: '05-02',
    },
  ]);
  const debouncedIsMessageActive = useDebounce(isMessageActive, {
    wait: 200,
  });

  const handleMouseEnter = () => {
    setIsMessageActive(true);
  };
  const handleMouseLeave = () => {
    setIsMessageActive(false);
  };
  return (
    <li className={cx('tool-msg')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div>
        <div className={cx('dropdown-trigger')}>
          <svg className={cx('btn-icon')}>
            <use href='#message' />
          </svg>
        </div>
        {debouncedIsMessageActive ? (
          <div className={cx('dropdown-overlay')}>
            <div className={cx('message-container')}>
              <div className={cx('message-header')}>
                <span className={cx('header-title')}>私信</span>
              </div>
              <div className={cx('message-list')}>
                {messageList.map((item) => (
                  <div key={item.id} className={cx('message-list-item')}>
                    <div className={cx('list-item-side')}>
                      <img className={cx('side-avatar')} src={Avatar} alt='avatar' />
                    </div>
                    <div className={cx('list-item-main')}>
                      <div className={cx('item-main-header')}>{item.name}</div>
                      <div className={cx('item-main-content')}>
                        <div className={cx('main-content-msg')}>{item.content}</div>
                        <div className={cx('main-content-time')}>{item.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </li>
  );
}
export default Message;
