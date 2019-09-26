import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounter from './CounterHooks/index';
import HookObject from './HookObject/index'
import UseStateArray from './UseStateArray/index';
import UseEffect from './UseEffect/index';
import ConditionalUseEffect from './Conditional_UseEffect/index'
import HookMouse from './HookMouse/index'
import DataFetch from './Fetch_Use_Effect/index'

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HookObject /> */}
      {/* UseStateArray */}
      {/* <UseEffect /> */}
      {/* <ConditionalUseEffect/> */}
      {/* <HookMouse /> */}
      <DataFetch />
    </div>
  );
}

export default App;
