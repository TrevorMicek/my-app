import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Overlay from '../../Styles/Overlay.js';
import MainSectionItem from '../../Styles/MainSectionItem';
import ForestImg from '../../Images/ForestImg.jpg';
import Title from '../../Styles/SectionTitle';
import Text from '../../Styles/SectionText';


//Secondary Item
const Container = styled(MainSectionItem)`
    background: url(${ForestImg}) no-repeat top center;
    background-size: 100% 100%;
    height: 35vh;

    @media(max-width: 768px) {
        font-size: 1.35em;
    }
    @media(min-width: 916px) {
        width: 60%;
        height: 40vh;
        font-size: 1.25em;
        
    }

    @media(min-width: 1060px) {
        font-size: 1.1em;
        width: 30%;
        
        margin-left: 1vw;
        
    }
`;
const ListText = styled(Text)`
    margin-left: 4vw;
    margin-top: 2vh;
`;
const SectionText = styled(Text)`
    margin-left: 9vw;
    margin-top: 2vh;

    @media(min-width: 1060px) {
        margin-left: 5vw;
        
    }
`;
const SectionTitle = styled(Title)`
    text-decoration: underline;
    max-width: 50%;
    
    :active {
        -webkit-box-shadow: inset 0px 0px 5px #006060;
        -moz-box-shadow: inset 0px 0px 5px #006060;
        box-shadow: inset 0px 0px 5px #006060;
    }
    
`;
const SecondarySection = () => (
     <Container >
        <Overlay>
        </Overlay>
        <Link to="/about">
         <SectionTitle>
             About Me
        </SectionTitle>
        </Link>

        <ListText>
            <li>Passionate</li>
            <li>Loves Learning</li>
            <li>Positive & Friendly</li>
            <li>Accepting of Feedback</li>
            <li>Determined to Grow</li>
        </ListText>
        <SectionText>
            Colorado born who loves adventuring around the foothills, meditation, & cooking!
        </SectionText>
    </Container>              
)
export default SecondarySection;
