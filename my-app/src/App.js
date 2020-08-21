import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Toggle from './Toggle';
import Popper from './Popper';

function Name(props) {
  return <h1>Website: {props.name}</h1>;
}

function Url(props) {
  return <h1>Address: {props.url}</h1>;
}

function Nickname(props) {
  return <h1>Nickname: {props.nickname}</h1>;
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Name name="菜鸟教程"></Name>
      <Url url="http://www.runoob.com"></Url>
      <Nickname nickname="Runoob"></Nickname>

      <Clock></Clock>
      
      <Toggle></Toggle>

      <Popper></Popper>
    </div>
  );
}

export default App;
