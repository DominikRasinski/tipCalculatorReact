import * as React from 'react';
import { MainContainer } from './componnents/mainContainer/mainContainer';
import { MainCalculator } from './componnents/tipCalculator/tipCalculator';
import './App.css';

function App() {
  return (
    <MainContainer >
      <MainCalculator/>
    </MainContainer>
  );
}

export default App;
