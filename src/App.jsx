import React from 'react';
import './App.css';
import RouteWebsite from './routes/RouteWebsite';
import { ContextSite } from './context/ContextWebsite';
import Header from './components/Header/Header';

function App() {
  const headerContext = <p>header</p>;
  return (
    <>
      <ContextSite.Provider value={{ headerContext }}>
        <Header />
        <RouteWebsite />
      </ContextSite.Provider>
    </>
  )
}

export default App
