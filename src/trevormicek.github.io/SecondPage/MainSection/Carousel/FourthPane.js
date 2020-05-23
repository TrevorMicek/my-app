import React from 'react';
import styled from 'styled-components';

import A from './CarouselStyles/Link';
import Background from './CarouselStyles/Background';
import Container from './CarouselStyles/Container';
import SectionText from './CarouselStyles/SectionText';
import SectionTitle from './CarouselStyles/SectionTitle';
import LibraryImg from '../../../Images/LibraryImg.jpeg';

//Background For Archive Project
const BG = styled(Background)`
    background: url(${LibraryImg}) no-repeat top center;
    background-size: 100% 95%;
`;
//Online Library Section
const SecondarySection = () => (
    <Container>
        <SectionTitle>
            <A>My Own Archive</A>
        </SectionTitle>
        <BG />
        <SectionText>
            For years I've wanted to make a website where I can easily sort and post links to reputable books, studies, anecdotes, 
            and anything else that I like learning about, to have a singular place to access valuable information. 
            It could also be helpful to others, but this project is really for me to accomplish something I've dreamt of.
        </SectionText>
    </Container>
)
export default SecondarySection;