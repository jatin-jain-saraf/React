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
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form'
import StyleSheet from './components/StyleSheet'
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import Parent from './components/Parent';
import PureComp from './components/PureComp';
import MemoCompo from './components/MemoCompo';
import RefDemo from './components/RefDemo'
import FocusInput from './components/FocusInput';
import Exercise3Parent from './components/Exercise3Parent';
class App extends Component {
  render() {
    return (
      <div className="App">

        <Exercise3Parent />

        {/* <FocusInput  /> */}

        {/* <RefDemo /> */}

        {/* <Parent /> */}

        {/* <Parent /> */}

        {/* <Table /> */}

        {/* <FragmentDemo /> */}

        {/* <Form /> */}

        {/* <StyleSheet primary /> */}

        {/* <NameList /> */}

        {/* <UserGreeting /> */}

        {/* <Greet /> */}
        {/* 
      <Hello name="Jatin" heroName="Thor" >
      <p>This is Children props</p>
      </Hello> */}

        {/* <Hello name="Saransh" heroName="Ironman" >
      <button>Action</button>
      </Hello> */}

        {/* <Hello name="Shantam" heroName="Capton America" /> */}

        {/* <Welcome name='Jatin' heroName='Thor'/>  */}

        {/* <Message /> */}

        {/* <Counter></Counter> */}

        {/* <Watch /> */}

        {/* <LifeCycleA /> */}

        {/* <Exercise2 /> */}

        {/* <FunctionClick /> */}

        {/* <ClassComponentClick></ClassComponentClick> */}

        {/* <EventBind /> */}

        {/* <ParentComponent /> */}
      </div>
    );
  }
}

export default App;
