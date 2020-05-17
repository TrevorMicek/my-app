import React from 'react';
import styled from 'styled-components';
import Text from '../../Styles/SectionText';


//Right Side of Footer
const RSStyles = styled.section`
    font-size: .7em;
    position: relative;
    margin: auto;
    margin-right: 3vw;
    bottom: 6vh;

    

    @media(min-width: 916px) {
        bottom: 7.5vh;
        margin-right: 2.5vw;
    }
`;
const RightSide = () => (
    <RSStyles>
        <Text> 
            Built W/ NPM, Reactjs,<br />
            Styled-Components, & VSC 
        </Text>
    </RSStyles>
);

export default RightSide;