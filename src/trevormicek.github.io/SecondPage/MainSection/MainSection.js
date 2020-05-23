import React from 'react';
import styled from 'styled-components';

import MainSectionContainer from '../../Styles/MainSectionContainer';
import Sunset from '../../Images/Sunset.jpg';
import Toggle from './Carousell';

//Main Section Items Wrapper
const MainSectionWrap = styled(MainSectionContainer)`
    background: url(${Sunset}) no-repeat top center;
    background-size: 100% 100%;
    padding-bottom: 10vh;
`;
const MainSection = () => (
    <MainSectionWrap>
        <Toggle />
    </MainSectionWrap>
)
export default MainSection;