import Logo from './Logo';
import SideMenu from './SideMenu';
import style from './styles/index.module.scss';

const list = [
  {
    value: 'discover',
    label: '首页',
    href: '/discover',
    route: '/discover',
    target: '',
    icon: 'discover',
    type: 'text',
  },
  {
    value: 'recommend',
    label: '推荐',
    href: '/',
    route: '/',
    target: '',
    icon: 'recommend',
    type: 'text',
  },
  {
    value: 'follow',
    label: '关注',
    href: '/follow',
    route: '/follow',
    target: '',
    icon: 'follow',
    type: 'text',
  },
  {
    value: 'live',
    label: '直播',
    href: '/live',
    route: '/live',
    target: '',
    icon: 'live',
    type: 'text',
  },
  {
    value: 'vs',
    label: '综艺',
    href: '/vs',
    route: '/vs',
    target: '',
    icon: 'vs',
    type: 'text',
  },
  {
    value: 'hot',
    label: '热点',
    href: '/hot',
    route: '/hot',
    target: '',
    icon: 'hot',
    type: 'text',
  },
  {
    value: 'yiqing',
    label: '疫情',
    href: '/yiqing',
    route: '/yiqing',
    target: '',
    icon: 'yiqing',
    type: 'text',
  },
];

function SideBar() {
  return (
    <div className={`${style['side-bar-container']} ${style['full-height']}`}>
      <Logo />
      <SideMenu list={list} />
    </div>
  );
}

export default SideBar;
