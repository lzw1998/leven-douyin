import { Outlet } from 'react-router-dom';
import SideBar from 'src/components/common/SideBar';
import layoutsStyle from 'src/styles/layouts.module.scss';

function AppWrapper() {
  return (
    <div className={layoutsStyle['app-wrapper']}>
      <SideBar />
      <Outlet />
    </div>
  );
}

export default AppWrapper;
