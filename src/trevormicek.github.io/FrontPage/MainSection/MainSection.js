import React from 'react';
import styled from 'styled-components';

import MainSectionContainer from '../../Styles/MainSectionContainer';
import PrimarySection from './PrimarySection';
import SecondarySection from './SecondarySection';
import TertiarySection from './TertiarySection';

//Main Section Container
const MainSectionWrap = styled(MainSectionContainer)`
    background: #014421;
    padding-bottom: 10vh;

    @media(max-width: 768px) {
    background: #145541;
    } 

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