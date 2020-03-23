import React from 'react';
import styled from 'styled-components';
import AppCard from './views/AppCard';
import Jenkinspic from './images/jenkins.png';
import Dockerpic from './images/docker.png';
import RocketChatpic from './images/rocketchat.png';
import Nexuspic from './images/nexus.png';
import Openshiftpic from './images/openshift.png';
import Splunkpic from './images/splunk.jpg';

function App() {
  return (
    <AppDesign className="App">
      <AllAppCards>
        <AppCard title='Jenkins' image={Jenkinspic}/>
        <AppCard title='Docker' image={Dockerpic}/>
        <AppCard title='RocketChat' image={RocketChatpic}/>
        <AppCard title='Nexus' image={Nexuspic}/>
        <AppCard title='Openshift' image={Openshiftpic}/>   
        <AppCard title='Splunk' image={Splunkpic}/>   
      </AllAppCards>
    </AppDesign>
  );
}

export default App;

const AppDesign = styled.div`
  display: flex;
  align-items: center;
  background-color:#191919;
  min-height: 100vh; 
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AllAppCards= styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
  align-items: center;
  margin-right:2em;
  margin-left: 2em;
  height: 100%;
  width: 100%;
`
