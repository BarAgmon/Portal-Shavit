import React from 'react';
import styled from 'styled-components';
import AppCard from './views/AppCard'
function App() {
  return (
    <AppDesign className="App">
      <AppCard/>
    </AppDesign>
  );
}

export default App;

const AppDesign = styled.div`
  background-color:black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
