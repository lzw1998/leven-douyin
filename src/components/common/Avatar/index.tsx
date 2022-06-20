import classNames from 'classnames/bind';
import { CSSProperties } from 'react';
import style from './styles/index.module.scss';

const cx = classNames.bind(style);

interface avatarProps {
  avatarUrl?: string;
  alt?: string;
  shape?: 'circle' | 'square';
  size?: number | string;
  src?: string;
}

function Avatar({ avatarUrl, alt, shape, size, src }: avatarProps) {
  const sizeStyle: CSSProperties =
    typeof size === 'number'
      ? { width: size, height: size, lineHeight: `${size}px` }
      : { width: size, height: size, lineHeight: size };
  return (
    <a href={avatarUrl} className={cx('avatar-container')}>
      <div className={cx('position-relative')}>
        <div className={cx('avatar-wrapper')}>
          <img className={cx('avatar', shape)} src={src} alt={alt} style={{ ...sizeStyle }} />
        </div>
      </div>
    </a>
  );
}

export default Avatar;
