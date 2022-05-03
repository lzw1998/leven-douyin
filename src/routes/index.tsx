import React from 'react';
import { Routes, Route } from 'react-router-dom';

const AppWrapper = React.lazy(() => import('src/layouts/AppWrapper'));
const Recommend = React.lazy(() => import('src/pages/recommend'));
const Discover = React.lazy(() => import('src/pages/discover'));
const Follow = React.lazy(() => import('src/pages/follow'));
const Hot = React.lazy(() => import('src/pages/hot'));
const Live = React.lazy(() => import('src/pages/live'));
const Vs = React.lazy(() => import('src/pages/vs'));
const Yiqing = React.lazy(() => import('src/pages/yiqing'));

function WithLazyLoad(WrappedComponent: React.FunctionComponent) {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <WrappedComponent />
    </React.Suspense>
  );
}

function MainRoute() {
  return (
    <Routes>
      <Route path='/' element={WithLazyLoad(AppWrapper)}>
        <Route index element={WithLazyLoad(Recommend)} />
        <Route path='discover' element={WithLazyLoad(Discover)} />
        <Route path='follow' element={WithLazyLoad(Discover)} />
        <Route path='hot' element={WithLazyLoad(Discover)} />
        <Route path='live' element={WithLazyLoad(Discover)} />
        <Route path='vs' element={WithLazyLoad(Discover)} />
        <Route path='yiqing' element={WithLazyLoad(Discover)} />
      </Route>
      <Route path='*' element={<div>404</div>} />
    </Routes>
  );
}

export default MainRoute;
