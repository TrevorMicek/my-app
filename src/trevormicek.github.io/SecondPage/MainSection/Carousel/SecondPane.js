import React from 'react';
import styled from 'styled-components';

import A from './CarouselStyles/Link';
import Background from './CarouselStyles/Background';
import Container from './CarouselStyles/Container';
import OldFreelanceImg from '../../../Images/OldFreelanceImg.jpg';
import SectionText from './CarouselStyles/SectionText';
import SectionTitle from './CarouselStyles/SectionTitle';

//Background For Twin Owl
const BG = styled(Background)`
    background: url(${OldFreelanceImg}) no-repeat top center;
    background-size: 100% 100%;
    border: 1px solid #000;
`;
//Twin Owl Section
const SecondarySection = () => (
    <Container>
        <SectionTitle>
            <A href="http://www.eagle-plumes.com">Old Freelance Site</A>
        </SectionTitle>
        <BG />
        <SectionText>
            I personally made this WordPress site for my old freelance gig back in November of 2018.  
            Although it's a simple WordPress site, it inspired me to recreate it 
            with my own HTML/CSS. Both of which helped me learn a lot as well as motivate me to 
            learn more and more to be able to make an even better app.
        </SectionText>
    </Container>
)
export default SecondarySection;