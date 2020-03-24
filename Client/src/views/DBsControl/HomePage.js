import React from 'react';
import styled from 'styled-components';
import OptionsDiv from './OptionsDiv'
import BackgroundImg from '.././../images/database.jpg';

export default function HomePage() {
  return (
      <Background image={BackgroundImg}>
          <Header>Start To Easily Control Your DB!</Header>
          <OptionsDiv/>
      </Background>
  );
}

const Background = styled.div`
  display: flex;
  align-items:center;
  justify-content:space-around;
  flex-direction: column;
  flex-wrap:wrap;
  width:100%;
  height:100%;
  background-image:url(${props => props.image}); 
`;

const Header = styled.h1`
    font-size: 2em;
    font-family: 'Segoe UI', 'Roboto', arial, sans-serif;
`
