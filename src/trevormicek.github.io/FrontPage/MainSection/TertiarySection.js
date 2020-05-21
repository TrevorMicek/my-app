import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import MainSectionItem from '../../Styles/MainSectionItem';
import Overlay from '../../Styles/Overlay.js';
import ScotishImg from '../../Images/ScotishImg.jpg';
import SecondPage from '../../SecondPage/SecondPage';
import SectionTitle from '../../Styles/SectionTitle';
import Text from '../../Styles/SectionText';

//Third Main Section Item(Projects)
const SectionText = styled(Text)`
    line-height: 1.5em;
    margin-left: 2vw;
    margin-top: 2vh;
    
    @media(max-width: 768px) {
        font-size: 1.25em;
    }
    @media(min-width: 1060px) {
        margin-left: 0;
        text-align: left;
    }
`;
const Container = styled(MainSectionItem)`
    background: url(${ScotishImg}) no-repeat top center;
    background-size: 100% 100%;
    height: 35vh;

    @media(min-width: 916px) {
        font-size: 1.25em;
        height: 40vh;
        width: 60%;
    }
    @media(min-width: 1060px) {
        font-size: 1.1em;
        margin-left: 1vw;
        margin-right: 1vw;
        width: 30%;
    }
`;
const Title = styled(SectionTitle)`
    text-decoration: underline;
    max-width: 35%;

    @media(max-width: 768px) {
        font-size: 1.85em;
    } 
`;
const OverlayStyle = styled(Overlay)`
    background: rgba(00, 00, 00, .15);
    @media(max-width: 768px) {
        background: rgba(00, 00, 00, .2);
    }
`;
const Links = styled.a`
    color: #f5fffA;
    margin-left: 5vw;
    line-height: 2vh;
`;
const TertiarySection = (props) => (    
    <Container>            
        <OverlayStyle />
        <Link to="/portfolio">
            <Title>Projects</Title>
        </Link>
        <SectionText>
            <Links href="eagle-plumes.com">Eagle Plume's</Links><br />
            <Links href="twinowldigital.com">Old Freelance Site</Links><br />
            <Links href="#">Marketing Portfolio Site</Links><br />
            <Links href="#">Art Collective Site</Links><br />
            <Links href="#">Many More to Come...</Links><br />
        </SectionText>                     
    </Container> 
)
export default TertiarySection;