import React, { lazy, Suspense } from 'react';

const LazyExperiencePage = lazy(() => import('./ExperiencePage'));

const ExperiencePage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExperiencePage {...props} />
  </Suspense>
);

export default ExperiencePage;
