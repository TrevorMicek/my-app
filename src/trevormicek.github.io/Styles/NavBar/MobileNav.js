import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import NavBar from './NavBar';

import Hamburger from './HamburgerMenu';
import DropDownMenu from './XComponent';
import DropDownStyles from './DropDownContainer';



const MobileNav = () => {
    
    const [isToggled, setToggled] = useState(false);
    
    const toggleTrueFalse = () => setToggled(!isToggled);
   
  
    return (
    <>
        {isToggled !== false ? 
       
        <DropDownStyles>
            
            <a onClick={toggleTrueFalse}>
                <DropDownMenu />
            </a>
          
        </DropDownStyles>
         :

        <a onClick={toggleTrueFalse}><Hamburger /></a>}
    </>
    );
};

export default MobileNav;