import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounter from './CounterHooks/index';
import HookObject from './HookObject/index'
import UseStateArray from './UseStateArray/index';
import UseEffect from './UseEffect/index';

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HookObject /> */}
      {/* UseStateArray */}
      <UseEffect />
    </div>
  );
}

export default App;
