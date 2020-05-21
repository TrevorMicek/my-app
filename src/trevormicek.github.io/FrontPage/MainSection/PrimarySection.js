import React from 'react';
import styled from 'styled-components';
import Overlay from '../../Styles/Overlay';
import MainSectionItem from '../../Styles/MainSectionItem';
import ChurchImg from '../../Images/ChurchImg.jpeg';
import Title from '../../Styles/SectionTitle';
import Text from '../../Styles/SectionText';

//First Main Section Item(language & skills)
const Container = styled(MainSectionItem)`
    background: url(${ChurchImg}) no-repeat top center;
    background-size: 100% 100%;
    height: 35vh;

    @media(max-width: 768px) {
        font-size: 1.15em;
    }
    @media(min-width: 916px) {
        font-size: 1.25em;
        height: 40vh;
        width: 60%;
    }
    @media(min-width: 1060px) {
        margin-left: 1vw;
        width: 30%;  
    }
`;
const OverlayStyle = styled(Overlay)`
    background: rgba(00, 00, 00, .15);

    @media(max-width: 768px) {
        background: rgba(00, 00, 00, .20);
    }
`;
const SectionTitle = styled(Title)`
    word-spacing: 5vw;

    @media(min-width: 1060px) {
        margin-bottom: 2vh;
        top: 3vh;
    }
`;
const FirstList = styled.ul`
    list-style-position: outside;
    line-height: 3.75vh;
    position: absolute;
    right: 30vw;
    top: 0;

    @media(min-width: 1060px) {
        font-size: .85em;
        right: 15vw;
    }
`;
const SecondList = styled.ul`
    left: 36vw;
    list-style-position: outside;
    position: absolute;
    top: 0;

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