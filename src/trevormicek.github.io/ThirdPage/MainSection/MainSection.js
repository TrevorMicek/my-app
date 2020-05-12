import React from 'react';
import styled from 'styled-components';
import CanyonImg from '../../Images/CanyonImg.jpg';
import MainSectionContainer from '../../Styles/MainSectionContainer';
import PrimarySection from './PrimarySection';
import SecondarySection from './SecondarySection';
import TertiarySection from './TertiarySection';


//Main Section Items Wrapper
const MainSectionWrap = styled(MainSectionContainer)`
    padding-bottom: 10vh;
    background: url(${CanyonImg}) no-repeat top center;
    background-size: 100% 100%;

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
