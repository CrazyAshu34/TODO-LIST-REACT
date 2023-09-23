import React, { useCallback, useState } from 'react'

function UseCallbackHook() {
    const [count, setCount] = useState(0)



    let callback = useCallback(() => {
        setCount(count + 10)
    }, [count])


    return (
        <div>
            {/* <h1>The value is Callbacked {callback}</h1> */}
            <h1>The value is Callbacked <br />{count}</h1>
            <button onClick={callback}>Count</button>
        </div>
    )
}

export default UseCallbackHook;


// LoooOOOOOOOOOOOOOook  Here
// child component

// return (
//     <>
//         <button onClick={onClick}>Click F me </button>
//         <p> THank you for watch me </p>
//     </>)

