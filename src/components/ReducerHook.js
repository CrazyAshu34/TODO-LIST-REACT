
// import React, { useReducer } from 'react';

// // let initialState = { count: 0 }
// let initialState = 0;

// function reducer(state, action) {

//   // switch (action.type) {
//   //   case "increment":
//   //     return { count: state.count + 1 };
//   //   case "decrement":
//   //     return { count: state.count - 1 };
//   //   default:
//   //     return state;
//   // }

//   /*  if (action.type === 'increment') {
//      return {count: state.count + 1}
//    }
//    if (action.type === 'decrement') {
//      return {count: state.count - 1}
//    }  */

//   if (action.type === 'increment') {
//     return state + 1
//   }
//   if (action.type === 'decrement') {
//     return state - 1
//   }
// }

// function ReducerHook() {
//   const [state, dispatch] = useReducer(reducer, initialState)

//   return (
//     <>
//       <p>{state}</p>a
//       <button onClick={() => { dispatch({ type: "increment" }) }}>increment</button>
//       <button onClick={() => { dispatch({ type: "decrement" }) }}>decrement</button>
//     </>
//   )
// }

// export default ReducerHook; 


import React, {useReducer} from 'react';


let MyinitValue = 0;

const ReducerFun = (state, action) => {

  if (action.type === "increment") {
    return state + 1
  }

  if (action.type === "decrement") {
    return state - 1
  }

}

function ReducerHook() {

  const [state, dispatch] = useReducer(ReducerFun, MyinitValue)
  return (
    <>
      <p>SOmething Cool :{state}: </p>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </>
  )
}

export default ReducerHook;