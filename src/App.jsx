import React from 'react';
import './App.css';
import RouteWebsite from './routes/RouteWebsite';
import { ContextSite } from './context/ContextWebsite';

function App() {
  const headerContext = <p>header</p>;
  return (
    <>
      <ContextSite.Provider value={{ headerContext }}>
        <RouteWebsite />
      </ContextSite.Provider>
    </>
  )
}

export default App
