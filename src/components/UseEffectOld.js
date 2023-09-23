import React, { useEffect, useState } from "react";

export default function UseEffectFun() {
    const [color, setColor] = React.useState('black');

    useEffect(() => {
        document.body.style.background = color;
    }, [color]);

    const changeColor = () => {
        setColor('yellow');
    };

    return (
        <>
            <h1 className="container" style={{ color: 'white' }}> Andhera kayam rahe </h1>
            <br />
            <br />
            <div className="container">
            <h2 style={{ color: 'red' }}>ShaktiMan button &nbsp;</h2>  
                <button onClick={changeColor}> SKTIMAAN.......</button>
            </div>
        </>
    );
}
