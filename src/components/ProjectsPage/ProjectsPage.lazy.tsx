import React, { lazy, Suspense } from 'react';

const LazyProjectsPage = lazy(() => import('./ProjectsPage'));

const ProjectsPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProjectsPage {...props} />
  </Suspense>
);

export default ProjectsPage;
