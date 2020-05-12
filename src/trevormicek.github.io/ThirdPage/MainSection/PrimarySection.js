import React from 'react';
import styled from 'styled-components';
import MainSectionItem from '../../Styles/MainSectionItem';
import Title from '../../Styles/SectionTitle';
import Text from '../../Styles/SectionText';

const Container = styled(MainSectionItem)`
    background: #fff;
    height: 40vh;
    max-width: 70%;
    padding-bottom: 10vh;

    @media(min-width: 916px) {
        
        font-size: 1.15em;
        padding-bottom: 5vh;

        
    }

    @media(min-width: 1060px) {
        font-size: 1.05em;
        height: 65vh;
        width: 30%;
        
        margin-left: 1vw;
        
    }
        
        
        
    
`;
const SectionTitle = styled(Title)`
    color: #000;
    text-shadow: none;
`;
const SectionText = styled(Text)`
    margin: 1vh 4vw;
    padding-top: 1vh;
    color: #000;
    text-shadow: none;

    @media(min-width: 1060px) {
        line-height: 3vh;
        
        
        
    }
`;
const PrimarySection = () => (
    <Container>
        <SectionTitle>
            My Hobbies...
        </SectionTitle>
        <SectionText>
            My biggest hobby is probably meditation, I've been practicing for a few years 
            and think it's one of the best ways to deal with stress. 
            Especially if it's alongside hiking or being in nature, i find it very fulfilling.
        </SectionText>
        <SectionText>
            I'm also a homebody and spend a decent amount of time playing video games, watching tv, coding, and cooking.
        </SectionText>
    </Container>
)
export default PrimarySection;