import React from 'react';
import styled from 'styled-components';

import MainSectionItem from '../../Styles/MainSectionItem';
import Text from '../../Styles/SectionText';
import Title from '../../Styles/SectionTitle';

//Values Section(Middle)
const Container = styled(MainSectionItem)`
    background: #fff;
    height: 35vh;
    max-width: 70%;
    padding-bottom: 15vh;

    @media(min-width: 916px) {
        font-size: 1.15em;
        padding-bottom: 5vh;
    }

    @media(min-width: 1060px) {
        font-size: 1.05em;
        height: 65vh;
        margin-left: 1vw;
        width: 30%;
    }
`;
const SectionTitle = styled(Title)`
    color: #000;
    text-shadow: none;
`;
const SectionText = styled(Text)`
    color: #000;
    margin: 1vh 4vw;
    padding-top: 1vh;
    text-shadow: none;
    
    @media(min-width: 1060px) {
        line-height: 3vh;
    }
`;

const SecondarySection = () => (
    <Container>
        <SectionTitle>
            My Values...
        </SectionTitle>
        <SectionText>
            I try to be eco-friendly and focus on being a good global citizen. 
            I'd love to find a position at a company that shares that value.
        </SectionText>
        <SectionText>
            What I value most in myself or in others is a sense of community and compassion, 
            I heavily avoid people that mistreat others or act selfishly at the expense of others.
        </SectionText>
    </Container>
)
export default SecondarySection;