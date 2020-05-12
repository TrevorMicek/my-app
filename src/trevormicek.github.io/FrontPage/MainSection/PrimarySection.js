import React from 'react';
import styled from 'styled-components';
import Overlay from '../../Styles/Overlay';
import MainSectionItem from '../../Styles/MainSectionItem';

import ChurchImg from '../../Images/ChurchImg.jpeg';
import Title from '../../Styles/SectionTitle';
import Text from '../../Styles/SectionText';


//Primary Item
const Container = styled(MainSectionItem)`
    background: url(${ChurchImg}) no-repeat top center;
    background-size: 100% 100%;
    height: 35vh;

    
    
    @media(min-width: 916px) {
        width: 60%;
        height: 40vh;
        font-size: 1.25em;
        
    }

    @media(min-width: 1060px) {
        width: 30%;
        
        margin-left: 1vw;
        
    }
`;
const OverlayStyle = styled(Overlay)`
    background: rgba(00, 00, 00, .15);
    
`;
const SectionTitle = styled(Title)`
    word-spacing: 5vw;

    @media(min-width: 1060px) {
        top: 3vh;
        margin-bottom: 2vh;
        
    }
`;
const FirstList = styled.ul`
    position: absolute;
    right: 30vw;
    top: 0;
    list-style-position: outside;
    line-height: 3.5vh;
    @media(min-width: 1060px) {
        font-size: .85em;
        right: 15vw;
        
    }
`;
const SecondList = styled.ul`
    position: absolute;
    left: 36vw;
    top: 0;
    list-style-position: outside;

    @media(min-width: 1060px) {
        font-size: .85em;
        left: 15vw;
        
    }
`;
const PrimarySection = () => (
    <Container>
            <OverlayStyle />
            <SectionTitle>
                Languages Skills
            </SectionTitle>

            <Text>
                <FirstList>
                    <li>ReactJS</li>
                    <li>ES6</li>
                    <li>AJAX/Json</li>
                    <li>HTML5/CSS3</li>
                </FirstList>
                <SecondList>
                    <li>OOP</li>
                    <li>Responsive<br/> Design</li>
                    <li>VSC</li>
                    <li>Git</li>
                </SecondList>
            </Text>
    </Container>
)
export default PrimarySection;