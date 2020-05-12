import React from 'react';
import styled from 'styled-components';

import MainSectionContainer from '../../Styles/MainSectionContainer';
import PrimarySection from './PrimarySection';



//Main Section Items Wrapper
const MainSectionWrap = styled(MainSectionContainer)`
    margin: 0 auto 0 auto;
    height: 50vh;
    padding-bottom: 30vh;
    background: #fff;
    
   
    
`;

const MainSection = () => (
    <MainSectionWrap>
        <PrimarySection />
    </MainSectionWrap>
)
export default MainSection;