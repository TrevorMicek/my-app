import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import NavBarContainer from './NavBarContainer';
import NavBarItem from './NavBarItem';


const DropDownStyles = styled(NavBarContainer)`
    display: inline-block;
    background-color: #fff;
    align-self: right;


    padding-top: 7.5vh;
    padding-bottom: 3.25vh;
  

    right: 0;

    max-width: 60%;
    height: 40%;
    
    @media(min-width: 915px) {
        display: none;
    }
`;

export default DropDownStyles;