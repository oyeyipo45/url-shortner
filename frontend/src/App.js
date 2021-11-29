import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  MyErrorBoundary  from './component/MyErrorBoundary.js';
import Loader from './component/Loader.js';
import Home from './Home.js';
import RedirectPage from './RedirectPage.js';

function App() {
  return (
    <Router>
      <MyErrorBoundary>
          <Home />
      </MyErrorBoundary>
    </Router>
  );
}

export default App;
