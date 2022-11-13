import React, { lazy, Suspense } from 'react';

const LazyConnectPage = lazy(() => import('./ConnectPage'));

const ConnectPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyConnectPage {...props} />
  </Suspense>
);

export default ConnectPage;
