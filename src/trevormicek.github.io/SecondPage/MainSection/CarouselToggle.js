import React from 'react';
import { useState } from 'react';
import CarouselOne from './CarouselOne';
import CarouselTwo from './CarouselTwo';

const CarouselToggle = () => {
    const [isToggled, setToggled] = useState(false);
    
    const toggleTrueFalse = () => setToggled(!isToggled);

    return (
    <>
        {isToggled !== false ? 
        
        <button onClick={toggleTrueFalse}><CarouselOne /></button> : null}

        {isToggled === false ? 
        <button onClick={toggleTrueFalse}><CarouselTwo /></button> : null}
    </>
    );
};

export default CarouselToggle;