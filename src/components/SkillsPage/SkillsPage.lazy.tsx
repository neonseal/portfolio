import React, { lazy, Suspense } from 'react';

const LazySkillsPage = lazy(() => import('./SkillsPage'));

const SkillsPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySkillsPage {...props} />
  </Suspense>
);

export default SkillsPage;
