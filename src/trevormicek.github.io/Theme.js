import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    overlay: {
    position: "absolute",
    margin: "0 auto",
    height: "100%",
    minWidth: "100%",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    zIndex: "4",
    bg: ["rgba(00, 00, 00, .9)",
    "rgba(00, 00, 00, .25)",
    "rgba(00, 00, 00, .3)"]
    }

};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export default Theme;