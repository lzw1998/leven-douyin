import { useLocation, useParams, NavLink } from 'react-router-dom';

import style from './styles/index.module.scss';
import sidemenuStyle from './styles/sidemenu.module.scss';

interface ListItem {
  value: string;
  label: string;
  href: string;
  route: string;
  target: string;
  icon: string;
  type: string;
  hideTab?: boolean;
}
interface SideMenuProps {
  list: Array<ListItem>;
}
function SideMenu({ list }: SideMenuProps) {
  // const location = useLocation();
  // const params = useParams();
  // console.log(location);
  // console.log(params);
  return (
    <div className={`${style['side-menu-container']} ${style['scroll-y']}`}>
      <div className={`${style['side-menu-scroll']} ${style['scroll-y']}`}>
        <div className={`${style['side-menu-wrapper']} `}>
          <div className={`${sidemenuStyle['douyin-side-menu']} ${style['full-height']}`}>
            {list.map((item: ListItem) => (
              <div
                key={item.value}
                className={`${sidemenuStyle['side-menu-item-wrapper']} ${sidemenuStyle['side-menu-segment']}`}
              >
                <NavLink
                  className={({ isActive }) =>
                    `${sidemenuStyle['side-menu-item']} ${sidemenuStyle['pos-relative']} ${
                      isActive ? sidemenuStyle.active : ''
                    }`
                  }
                  target={item.target}
                  title={item.label}
                  to={item.route}
                >
                  <div className={sidemenuStyle['side-menu-item-icon']}>
                    <svg className={sidemenuStyle.icon}>
                      <use href={`#${item.icon}`} />
                    </svg>
                  </div>

                  <div className={sidemenuStyle['side-menu-item-label']}>
                    <span className={sidemenuStyle.label}>{item.label}</span>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={style['side-menu-footer']} />
    </div>
  );
}

export default SideMenu;
