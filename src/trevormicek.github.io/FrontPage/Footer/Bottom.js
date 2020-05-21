import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Text from '../../Styles/SectionText';
import Wrapper from '../../Styles/Wrapper';

//Bottom Nav 
const Container = styled(Wrapper)`
    bottom: 3vh;
    display: inline-block;
    left: 0;
    position: absolute;
    text-align: center;
    width: 92vw;
    
    @media(max-width: 768px) {
        min-width: 50%;
    }
    @media(min-width: 916px) {
        font-size: 1.45em;
    }
`;
const SectionText = styled(Text)`
    display: inline-block;
    font-size: .5em;
    line-height: 1.5em;
    margin-right: 1.5vw;
    position: relative;
    text-decoration: underline;
    z-index: 5;
    @media(max-width: 768px) {
        font-size: .65em;
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
                Projects
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