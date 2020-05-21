import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Overlay from '../../Styles/Overlay.js';
import MainSectionItem from '../../Styles/MainSectionItem';
import AutumnImg from '../../Images/AutumnImg.jpg';
import Title from '../../Styles/SectionTitle';
import Text from '../../Styles/SectionText';


//Second Main Section Item(About Me)
const Container = styled(MainSectionItem)`
    background: url(${AutumnImg}) no-repeat top center;
    background-size: 100% 100%;
    height: 40vh;

    @media(max-width: 768px) {
        font-size: 1.25em;
    }
    @media(min-width: 916px) {
        font-size: 1.25em;
        height: 40vh;
        width: 60%;
    }
    @media(min-width: 1060px) {
        font-size: 1.1em;
        margin-left: 1vw;
        width: 30%; 
    }
`;
const OverlayStyle = styled(Overlay)`
    background: rgba(00, 00, 00, .15);
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
        <OverlayStyle />
        <Link to="/about">
         <SectionTitle>
             About Me
        </SectionTitle>
        </Link>

        <ListText>
            <li>Passionate</li>
            <li>Loves Learning</li>
            <li>Positive & Friendly</li>
            <li>Eager For Advice</li>
            <li>Determined to Grow</li>
        </ListText>
        <SectionText>
            Colorado born who loves adventuring around the foothills, meditation, & cooking!
        </SectionText>
    </Container>              
)
export default SecondarySection;