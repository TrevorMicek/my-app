import React from 'react';
import styled from 'styled-components';

import Title from './../../../../Styles/SectionTitle';

//Carousel(Projects Page) Title Styles
const SectionTitle = styled(Title)`
    border-bottom: 2px solid #000;
    text-shadow: none;
    
    @media(min-width: 916px) {
        font-size: 1.65em;
        margin: 2vh auto;
    }
`;
export default SectionTitle;