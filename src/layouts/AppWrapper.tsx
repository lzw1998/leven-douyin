import { Outlet } from 'react-router-dom';
import SideBar from 'src/components/common/SideBar';
import Header from 'src/components/common/Header';
import layoutsStyle from 'src/styles/layouts.module.scss';

function AppWrapper() {
  return (
    <div className={layoutsStyle['app-container']}>
      <SideBar />
      <div className={layoutsStyle['main-container']}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default AppWrapper;
