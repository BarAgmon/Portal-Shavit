import React from 'react';
import {Button,Grid,Header,Icon} from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function GridColumn({iconName, text, buttonColor, buttonContent, onClick}){
    return (
        <SizeGridColumn>
            <PlaceComponents icon>
                <div><Icon name={iconName} /></div>
                <div>{text}</div>
                <div><Button basic color={buttonColor} content={buttonContent} onClick={onClick}/></div>
            </PlaceComponents>
         </SizeGridColumn>
    );
}

const PlaceComponents = styled(Header)`
    display : flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content:space-between;
    width:100%;
    height:100%;
`;

const SizeGridColumn = styled(Grid.Column)`
    width:100%;
    height:100%;
`
GridColumn.propTypes = {
    iconName:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
    buttonColor:PropTypes.string.isRequired,
    buttonContent:PropTypes.string.isRequired
  };