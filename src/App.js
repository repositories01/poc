import React from 'react';
import IndexPomo from './components/pomodoro/IndexPomo';
import Work from './view/work';
import NavBar from './components/navbar/navbar';
import './styles/base.scss';


function App() {
  return (
    <div>
      <NavBar />
      <Work />

    </div>
  );
}

export default App;