import React from 'react';
import styled from 'styled-components';
import AllAppCards from './views/Links/AllAppCards';
import SidebarApp from "./views/Sidebar";

function App() {
  return (
    <AppDesign className="App">
       <SidebarApp/>
      <AllAppCards/>
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
  height: 100vh; 
`;

