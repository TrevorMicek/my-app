import React from 'react';
import styled from 'styled-components';

import MainSectionItem from '../../Styles/MainSectionItem';
import Text from '../../Styles/SectionText';
import Title from '../../Styles/SectionTitle';

//Goals Section(Last)
const Container = styled(MainSectionItem)`
    background: #fff;
    height: 45vh;
    max-width: 70%;

    @media(min-width: 916px) {
        font-size: 1.15em;
        padding-bottom: 5vh;
    }

    @media(min-width: 1060px) {
        font-size: 1.05em;
        height: 65vh;
        width: 30%;
        margin-left: 1vw;
        margin-right: 1vw;
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

const TertiarySection = () => (
    <Container>
        <SectionTitle>
            My Goals...
        </SectionTitle>
        <SectionText>
            I'm eager to learn new things. I have a lot of goals in life that require a lot of research.
        </SectionText>
        <SectionText>
            Some of those goals involve helping others, like community outreach, 
            charity, or meditation to make a difference.
        </SectionText>
        <SectionText>
            Some of my goals are more selfish like wanting to build my own house in the woods, or travelling, or learning a foreign language(czech).
        </SectionText>
    </Container>
)
export default TertiarySection;