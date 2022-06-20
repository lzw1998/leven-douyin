import classNames from 'classnames/bind';
import { useState } from 'react';
import useDebounce from 'src/hooks/useDebounce';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactXgplayer from 'src/components/common/ReactXgplayer';

import style from './index.module.scss';
import 'swiper/css';

const cx = classNames.bind(style);

const playerConfig = {
  id: 'vs1',
  url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
  width: '100%',
  height: '100%',
  playsinline: true,
  playbackRate: [0.5, 0.75, 1, 1.5, 2],
  defaultPlaybackRate: 1,
  autoplay: true,
};
let Mp4Player = null;
const playerStyle = {
  borderRadius: '4px',
};

function Recommend() {
  const [videoList, setVideoList] = useState([
    {
      id: 1,
      name: '123',
    },
    {
      id: 2,
      name: '456',
    },
  ]);
  const [isTopbarHover, setIsTopbarHover] = useState<boolean>(false);
  const debouncedIsTopbarHover = useDebounce(isTopbarHover, {
    wait: 200,
  });

  const handleMouseEnter = () => {
    setIsTopbarHover(true);
  };
  const handleMouseLeave = () => {
    setIsTopbarHover(false);
  };

  const readyHandle = () => {
    console.log('Mp4 player ready!');
  };

  const completeHandle = (player: any) => {
    console.log('Mp4 player complete!');
  };

  const destroyHandle = () => {
    console.log('Mp4 player destroy!');
  };
  return (
    <>
      <div
        className={cx('recommend-topbar-container', 'bg-topbar', debouncedIsTopbarHover ? 'expand' : 'collapse')}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={cx('topbar-arrow', {
            hidden: debouncedIsTopbarHover,
          })}
        />
        <ul
          className={cx('topbar-list', {
            hidden: !debouncedIsTopbarHover,
          })}
        >
          <li className={cx('topbar-list-item', 'active')}>
            <span>全部</span>
          </li>
          <li className={cx('topbar-list-item')}>
            <span>横视频</span>
          </li>
        </ul>
      </div>
      <div className={cx('feedback-container')}>
        <Swiper
          autoHeight
          direction='vertical'
          className={cx('feedback-main')}
          spaceBetween={24}
          initialSlide={0}
          longSwipesRatio={0.1}
          preloadImages={false}
          resistanceRatio={0.7}
          speed={250}
          threshold={15}
          touchRatio={2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          style={{
            position: 'absolute',
            left: 0,
            top: 'calc(0% + 24px)',
            width: '100%',
            height: 'calc(100% - 48px)',
            overflow: 'visible',
          }}
        >
          {videoList.map((item) => (
            <SwiperSlide key={item.id} className={cx('')}>
              {({ isActive }) => (
                <div className={cx('player-container')}>
                  <div className={cx('player-wrapper')}>
                    <div className={cx('slider-video')}>
                      {isActive ? (
                        <ReactXgplayer
                          rootStyle={playerStyle}
                          config={playerConfig}
                          playerInit={(player) => {
                            Mp4Player = player;
                          }}
                          readyHandle={readyHandle}
                          completeHandle={completeHandle}
                          destroyHandle={destroyHandle}
                        />
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Recommend;
