import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import FirstPane from './Carousel/FirstPane';
import SecondPane from './Carousel/SecondPane';
import MainSectionItem from '../../Styles/MainSectionItem';

const Container = styled(MainSectionItem)`
    height: 0;
    min-width: 75%;
    padding-bottom: 9vh;
    box-shadow: none;
    padding-left: 0;
    cursor: default;
    margin: inherit auto;

    @media(min-width: 916px) {
        
        font-size: 1.35em;

        
    }

`;


const CarouselOne = () => (
    <Container>
    
    
    <FirstPane />
    <SecondPane />
    </Container>
)

export default CarouselOne;