import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Theme from './../Theme';

//Overlay Style
const OverlayStyles = styled.section`
    position: absolute;
    margin: 0 auto;
    height: 100%;
    min-width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 4;
    background: none;
   
`;


const Overlay = (props) => (
    <ThemeProvider theme={Theme}>
    <OverlayStyles />
    </ThemeProvider>
)
export default Overlay;
