import React from 'react';
import styled from 'styled-components';
import AllAppCards from './views/AllAppCards';
import SidebarApp from "./views/Sidebar";
import DevopsPic from './views/DevopsPic';

function App() {
  return (
    <AppDesign className="App">
       <SidebarApp/>
      <AllAppCards/>
      <DevopsPic/>
    </AppDesign>
  );
}

export default App;

const AppDesign = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color:#191919;
  min-height: 100vh; 
  font-size: calc(10px + 2vmin);
  color: white;
  flex-wrap:wrap;
  justify-content:center;
`;

