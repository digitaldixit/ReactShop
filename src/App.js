import React from 'react';
import rootRoute from './system/route';

import Header from './header';
import Footer from './footer';
function App() {
  return (
    <div className="app">
      <Header/>
      { rootRoute}
      <Footer/>
    </div>
  );
}

export default App;
