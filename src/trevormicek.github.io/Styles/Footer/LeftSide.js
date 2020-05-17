import React from 'react';
import styled from 'styled-components';
import Icons from './Icons';
import Text from '../../Styles/SectionText';



//Left Side of Footer
const LSStyles = styled.section`
    color: #fff;
    position: relative;
    bottom: 5vh;
    left: 3vw;

    img {
        width: 1.25em;
        height: 1.25em;
    }
    @media(max-width:768px) {
        font-size: .85em;
    }
    @media(min-width: 916px) {
        bottom: 7.5vh;
        margin-left: 12.5vw;
        font-size: .9em;
        
    }
`;
const LeftSide = () => (
    <LSStyles>
        <Text>Follow Me!
        <Icons> 
                <a href="http://www.instagram.com" ><img src={require('../../Images/IIcon.png')} alt="Instagram Icon"></img></a>
           
        </Icons>
        </Text>
    </LSStyles>
);
export default LeftSide;