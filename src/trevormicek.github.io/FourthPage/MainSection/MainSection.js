import React from 'react';
import styled from 'styled-components';

import MainSectionContainer from '../../Styles/MainSectionContainer';
import PrimarySection from './PrimarySection';

//Main Section Items Wrapper
const MainSectionWrap = styled(MainSectionContainer)`
    background: #fff;
    height: 50vh;
    margin: 0 auto 0 auto;
    padding-bottom: 30vh;
`;
const MainSection = () => (
    <MainSectionWrap>
        <PrimarySection />
    </MainSectionWrap>
)
export default MainSection;