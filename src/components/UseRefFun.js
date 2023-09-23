// import React, { useRef } from 'react'

// function UseRefFun() {
//     const countRef = useRef(0)

//     function ClickEvent() {
//         countRef.current++
//         console.log("I'm increasing ", countRef.current, "Times")
//     }
//     console.log("i am working now")

//     return (
//         <>
//             <h1>Handle something</h1>
//             <button onClick={ClickEvent}>Just CLICK it</button>
//         </>
//     )
// }
// export default UseRefFun;


//////////||||||||||||||||\\\\\\\\\\\\\ another way 
// import { useRef } from 'react';

// function UseRefFun() {
//     const countRef = useRef(0);

//     const handle = () => {
//         countRef.current++;
//         console.log(`Clicked ${countRef.current} times`);
//     };

//     console.log('I rendered!');

//     return <button onClick={handle}>Click me</button>;
// }
// export default UseRefFun;


import React, { useRef } from 'react';

function UseRefFun() {
    const countRef = useRef(0);

    const handle = () => {
        countRef.current++;
        console.log(`Clicked ${countRef.current} times`);
    };

    console.log('I rendered!');

    return (
        <>
            <h1 id='demo'>Click time: {countRef.current}</h1>
            <h2> See The Console Not here</h2>
            It will turn blue dom element that will:
            <button onClick={handle}>Click itme</button>
        </>
    );
}

export default UseRefFun;



