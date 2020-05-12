import React from 'react';
import styled from 'styled-components';
import Title from './../../../../Styles/SectionTitle';

const SectionTitle = styled(Title)`
    text-shadow: none;
    border-bottom: 2px solid #000;

    @media(min-width: 916px) {
        margin: 2vh auto;
        font-size: 1.65em;

        
    }
`;
export default SectionTitle;