import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Watch from './components/Watch';
function App() {
  return (
    <div className="App">
      {/* {/* <Greet /> */}

      {/* <Hello name="Jatin" heroName="Thor" > */}
      {/* <p>This is Children props</p> */}
      {/* </Hello> */}
      {/* <Hello name="Saransh" heroName="Ironman" > */}
      {/* <button>Action</button> */}
      {/* </Hello> */}
      {/* <Hello name="Shantam" heroName="Capton America" /> */}
      {/* <Welcome name='Jatin' heroName='Thor'/>  */}
      {/* <Message /> */}
      {/* <Counter></Counter> */}
      <Watch />
    </div>
  );
}

export default App;
