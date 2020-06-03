import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';

//NavBar Styles
export default styled(Wrapper)`
    background: #fff;
    box-shadow: #000 0px 0px 3px;
    flex-direction: row;
    justify-content: flex-end;
    min-height: 35px;
    padding: 3vh 0vw;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 10;
`;