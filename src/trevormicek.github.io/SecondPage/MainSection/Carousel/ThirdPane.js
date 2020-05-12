import React from 'react';
import styled from 'styled-components';

import Container from './CarouselStyles/Container';
import Background from './CarouselStyles/Background';
import A from './CarouselStyles/Link';
import SectionTitle from './CarouselStyles/SectionTitle';
import SectionText from './CarouselStyles/SectionText';
import PixelArtImg from '../../../Images/PixelArtImg.jpeg';

const BG = styled(Background)`
    background: url(${PixelArtImg}) no-repeat top center;
    background-size: 100% 95%;
`;

const SecondarySection = () => (
    <Container>
        <SectionTitle>
            <A>Game Dev</A>
        </SectionTitle>
        <BG />
        <SectionText>
            In my freetime I have found myself drawn to making games. Right now, 
            I'm just slowly going through some very basic vanilla JS games 
            to help my exposure to an app with a majority of it being JS logic. 
            I have plans to make my own game from scratch once I feel more comfortable with the concepts. 
            My goal is to have a fun little game that can act as a sandbox for my creativity and to hone my vanilla JS skills outside of building websites.
        </SectionText>
    </Container>
)
export default SecondarySection;