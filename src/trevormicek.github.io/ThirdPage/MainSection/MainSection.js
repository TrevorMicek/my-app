import React from 'react';
import styled from 'styled-components';

import CanyonImg from '../../Images/CanyonImg.jpg';
import MainSectionContainer from '../../Styles/MainSectionContainer';
import PrimarySection from './PrimarySection';
import SecondarySection from './SecondarySection';
import TertiarySection from './TertiarySection';

//Main Section Container
const MainSectionWrap = styled(MainSectionContainer)`
    background: url(${CanyonImg}) no-repeat top center;
    background-size: 100% 100%;
    padding-bottom: 10vh;

    @media(min-width: 1060px) {
        flex-direction: row;
    }
`;
const MainSection = () => (
    <MainSectionWrap>
        <PrimarySection />
        <SecondarySection />
        <TertiarySection />
    </MainSectionWrap>
)
export default MainSection;