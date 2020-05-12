import React from 'react';
import styled from 'styled-components';
import Overlay from '../../Styles/Overlay.js';
import MainSectionItem from '../../Styles/MainSectionItem';
import FeatherImg from '../../Images/FeatherImg.jpg';
import SectionTitle from '../../Styles/SectionTitle';
import Text from '../../Styles/SectionText';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import SecondPage from '../../SecondPage/SecondPage';


//Tertiary Item

const SectionText = styled(Text)`
    margin-top: 2vh;
    margin-left: 2vw;
    line-height: 1.5em;

    @media(max-width: 768px) {
        font-size: 1.25em;
    }
    @media(min-width: 1060px) {
margin-left: 0;
        
        text-align: left;
        
        
        
    }
`;
const Container = styled(MainSectionItem)`
    background: url(${FeatherImg}) no-repeat top center;
    background-size: 100% 100%;
    height: 35vh;

    @media(min-width: 916px) {
        width: 60%;
        height: 40vh;
        font-size: 1.25em;
        
    }

    @media(min-width: 1060px) {
        font-size: 1.1em;
        width: 30%;
        margin-left: 1vw;
        margin-right: 1vw;
        
    }
`;
const Title = styled(SectionTitle)`
    text-decoration: underline;
    max-width: 35%;

    @media(max-width: 768px) {
        font-size: 1.65em;
    }
    

    
`;
const OverlayStyle = styled(Overlay)`
    background: rgba(00, 00, 00, .05);
    @media(max-width: 768px) {
        background: rgba(00, 00, 00, .20);
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