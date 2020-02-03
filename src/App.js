import React from 'react';
import Footer from './components/footer/footer.componet'
import './App.css';
import Header from './components/header/header.component';
import Info from './components/info/info.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Info/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
