//redux is a pattern or library for managing and updating the application state.
//using events called actions serves as a centralized store for state that nneds to be used across entire your application.
 //action: what to do?. It is a plane javascript object that have one type 
 //field actions only tell what to do they wont't say how to do.

 //reducer: how to do?. It is same as useReducer hook.
 //store: it holds the state of application.

 //in the store we have function, 1) createStore(): how to create.
 // the store and dispatch(action): ho w to trigger an action.
 //getState(): it is used to get the current state.

 import React from 'react'
 import { useDispatch, useSelector } from 'react-redux'
 import { INCREMENT,DECREMENT } from '../actiontypes/actiontypes';
 
 const ComponentA = () => {
    const dispatch =useDispatch()
    const myState= useSelector((state) => state.reducerFun);

    const increment =() => {
        dispatch({ type: INCREMENT});
    };
    
   return (
     <div>
     <h1> { myState} </h1>

        <button onClick={increment}> Increment </button>
        <button  
        onClick ={ () => {
            dispatch({type:DECREMENT});
        }}
        > 
        Decrement
         </button>

     </div>
   )
 }
 export default ComponentA;