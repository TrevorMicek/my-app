import React from 'react';
import styled from 'styled-components';

import MainSectionItem from './../../../../Styles/MainSectionItem';

//Styles For Project Page Main Section Container
const Container = styled(MainSectionItem)`
    background: #fff;
    height: 80vh;
    max-width: 80%;

    @media(min-width: 916px) {
        height: 90vh;  
    }
`;
export default Container;