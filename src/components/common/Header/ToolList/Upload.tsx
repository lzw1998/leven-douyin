import classNames from 'classnames/bind';
import toolListStyle from '../styles/ToolList.module.scss';

const cx = classNames.bind(toolListStyle);
function Upload() {
  return (
    <li className={cx('tool-upload')}>
      <div className={cx('decorative-line-left', 'decorative-line')} />
      <a
        className={cx('upload-btn')}
        href='#upoload'
        target='_blank'
        style={{
          marginLeft: 0,
          marginRight: 0,
          whiteSpace: 'nowrap',
        }}
      >
        <div className={cx('upload-icon')} />
        <span>发布视频</span>
      </a>
      <div className={cx('decorative-line-right', 'decorative-line')} />
    </li>
  );
}

export default Upload;
