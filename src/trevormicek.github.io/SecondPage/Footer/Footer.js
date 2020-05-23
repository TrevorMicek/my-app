import React from 'react';
import styled from 'styled-components';

import Bottom from '../Footer/Bottom';
import LeftSide from '../../Styles/Footer/LeftSide';
import RightSide from '../../Styles/Footer/RightSide';
import Wrapper from '../../Styles/Wrapper';

//Footer Component
const Container = styled(Wrapper)`
    align-items: flex-end;
    background: #606060;
    bottom: 0;
    box-shadow: none;
    flex-direction: row;
    padding-top: 5vh;
    z-index: 7;

    @media(max-width: 768px) {
        font-size: 1.25em;
    }
    @media(min-width: 916px) {
        padding-top: 7.5vh;  
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