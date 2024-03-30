import './App.css';
import { useState } from 'react';
import {useDispatch,useSelector} from "react-redux";

function App() {
 let count = useSelector(state =>state.count);
 let id = useSelector(state =>state.id);
 let password = useSelector(state => state.password);

  const dispatch = useDispatch();

  const increase = () =>{
    dispatch({type:"INCREMENT",payload:{num:5}});
     };
  const decrement = () => {
    dispatch({type:"DECREMENT",payload:{num:1}});
  };
  const login = () =>{ 
    dispatch({type:"LOGIN",payload:{id:"noona",password:"123"}});
  };

  return (
    <div>
      <h1>{id},{password}</h1>
    <h1>{count}</h1>
    <button onClick={increase}>증가</button>
    <button onClick={login}>Login </button>
    <button onClick={decrement}>감소</button>
    </div>
  );
}

export default App;
