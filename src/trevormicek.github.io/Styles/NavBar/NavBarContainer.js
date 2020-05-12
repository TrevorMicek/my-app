import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';

//NavBar Styles
export default styled(Wrapper)`
    width: 100%;
    min-height: 35px;
    flex-direction: row;
    justify-content: flex-end;
    padding: 3vh 0vw;
    position: fixed;
    z-index: 10;
    background: #fff;
    top: 0;
    right: 0;
    box-shadow: #000 0px 0px 3px;
    
`;