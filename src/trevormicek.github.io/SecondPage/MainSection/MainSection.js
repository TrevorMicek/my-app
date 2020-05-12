import React from 'react';
import styled from 'styled-components';

import MainSectionContainer from '../../Styles/MainSectionContainer';
import Sunset from '../../Images/Sunset.jpg';
import SecondPane from './Carousel/SecondPane';
import FirstPane from './Carousel/FirstPane';
import Toggle from './Carousell';


//Main Section Items Wrapper
const MainSectionWrap = styled(MainSectionContainer)`
    padding-bottom: 10vh;
    background: url(${Sunset}) no-repeat top center;
    background-size: 100% 100%;
`;
const MainSection = () => (
    <MainSectionWrap>
        <Toggle />
        
    </MainSectionWrap>
)
export default MainSection;