import React from 'react';
import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner />
    </div>
  );
}

export default App;
