import './App.css';
import React, { Suspense } from 'react';
import  MyErrorBoundary  from './component/MyErrorBoundary.js';
const Home = React.lazy(() => import('./Home'));

function App() {
  return (
    <MyErrorBoundary>
      <Suspense fallback={<div>Loading . . . </div>}>
        <Home />
      </Suspense>
    </MyErrorBoundary>
  );
}

export default App;
