import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Text from '../../Styles/SectionText';
import Wrapper from '../../Styles/Wrapper';

import FirstPage from '../FirstPage';
import SecondPage from '../../SecondPage/SecondPage';
import ThirdPage from '../../ThirdPage/ThirdPage';
import FourthPage from '../../FourthPage/FourthPage';

//Bottom Nav 
const Container = styled(Wrapper)`
    position: absolute;
    left: 50%;
    bottom: 3vh;
    display: inline-block;
    
    @media(min-width: 916px) {
   
        font-size: 1.45em;
        
    }
`;
const SectionText = styled(Text)`
    display: inline-block;
    font-size: .5em;
    line-height: 1.5em;
    z-index: 5;
    right: 50%;
    margin-right: 1.5vw;
    text-decoration: underline;
    @media(min-width: 768px) {
        font-size: .75em;
    }
    
`;
const Bottom = () => (
    
    <Container>
       
        <NavLink to="/">
        <SectionText>
            Home
        </SectionText>
        </NavLink>

        <NavLink to="/portfolio">
        <SectionText>
            Portfolio
        </SectionText>
        </NavLink>

        <NavLink to="/about">
        <SectionText>
            About
        </SectionText>
        </NavLink>

        <NavLink to="/contact">
        <SectionText>
            Contact
        </SectionText>
        </NavLink>
        
        
        
        

        

     </Container>
     
    

)
export default Bottom;