import React from 'react';
import styled from 'styled-components';

import A from './CarouselStyles/Link';
import Background from './CarouselStyles/Background';
import Container from './CarouselStyles/Container';
import EaglePlume from '../../../Images/EaglePlume.jpg';
import SectionText from './CarouselStyles/SectionText';
import SectionTitle from './CarouselStyles/SectionTitle';

//Background For Eagle Plume Project
const BG = styled(Background)`
    background: url(${EaglePlume}) no-repeat top center;
    background-size: 100% 95%;
`;
//Eagle Plume Section
const SecondarySection = () => (
    <Container>
        <SectionTitle>
            <A href="http://www.eagle-plumes.com">Eagle Plume's</A>
        </SectionTitle>
        <BG />
        <SectionText>
            Eagle Plume's is owned and operated by a local to Estes Park. 
            Her website was 15 years old and lacked a user-friendly UI/UX. 
            I was able to build her an inexpensive UI/UX-friendly WordPress site w/ an e-commerce section. 
            She now has complete control over her modern website through GoDaddy.
        </SectionText>
    </Container>
)
export default SecondarySection;