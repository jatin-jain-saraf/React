import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Watch from './components/Watch';
import LifeCycleA from './components/LifeCycleA';
import FunctionClick from './components/FunctionClick';
import Exercise2 from './components/Exercise2';
import ClassComponentClick from './components/ClassComponentClick';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet />

      <Hello name="Jatin" heroName="Thor" >
      <p>This is Children props</p>
      </Hello>
      <Hello name="Saransh" heroName="Ironman" >
      <button>Action</button>
      </Hello>
      <Hello name="Shantam" heroName="Capton America" />
      <Welcome name='Jatin' heroName='Thor'/> 
      <Message />
      <Counter></Counter>
        */}
        <Watch />
        {/* <LifeCycleA />
       */}
        {/* <Exercise2 /> */}
        {/* <FunctionClick /> */}

        {/* <ClassComponentClick></ClassComponentClick> */}
      </div>
    );
  }
}

export default App;
