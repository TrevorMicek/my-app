import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../Styles/Wrapper';
import LeftSide from '../../Styles/Footer/LeftSide';
import RightSide from '../../Styles/Footer/RightSide';
import Bottom from '../Footer/Bottom'


//Footer Component
const Container = styled(Wrapper)`
    flex-direction: row;
    align-items: flex-end;
    background: #606060;
    padding-top: 5vh;
    bottom: 0;
    box-shadow: none;
    z-index: 7;
    @media(min-width: 916px) {
        padding-top: 7.5vh;
        font-size: 1.25em;

        
    }
`;

const Footer = () => (
    <Container>
        <LeftSide />
        <Bottom />
        <RightSide />
    </Container>
)
export default Footer;