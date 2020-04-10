import React, { Component } from 'react';
// import ClickCounter2 from './components/Render/ClickCounter2';
// import HoverCounter2 from './components/Render/HoverCounter2';
// import User from './components/Render/User';
// import RenderPropsCounter from './components/Render/RenderPropsCounter';
// import ClickCounter from './components/Hoc/ClickCounter';
// import './App.css';
// import Greet from './components/IntroductionGreet'
// import Welcome from './components/Introduction/Welcome';
// import Hello from './components/Introduction/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import Watch from './components/Exercise1/Watch';
// import LifeCycleA from './components/LifeCycle/LifeCycleA';
// import FunctionClick from './components/FunctionClick';
// import Exercise2 from './components/Exercise2/Exercise2';
// import ClassComponentClick from './components/ClassComponentClick';
// import EventBind from './components/EventBinding/EventBind';
// import ParentComponent from './components/PureComponent/ParentComponent';
// import UserGreeting from './components/ConditionalRendering/UserGreeting';
// import NameList from './components/ListKeys/NameList';
// import Form from './components/ErrorBoundries/Form'
// import StyleSheet from './components/Styling/StyleSheet'
// import FragmentDemo from './components/Fragments/FragmentDemo';
// import Table from './components/Fragments/Table';
// import Parent from './components/PureComponent/Parent';
// import PureComp from './components/PureComponent/PureComp';
// import MemoCompo from './components/Memo/MemoCompo';
// import RefDemo from './components/Refs/RefDemo'
// import FocusInput from './components/Refs/FocusInput';
// import Exercise3Parent from './components/Exercise3/Exercise3Parent';
// import HoverCounter from './components/Hoc/HoverCounter';
// import FRIParentInput from './components/FRIParentInput';
// import PortalDemo from './components/PortalDemo';
import ComponentA from './components/Exercise4/ComponentA'
import { UserProvider } from './components/Exercise4/UserContext';


class App extends Component {
  render() {
    return (
      <div className="App">
        

          <ComponentA />








        {/* <RenderPropsCounter>
          {(count, incrementCount) => (
            <ClickCounter2 count={count} incrementCount={incrementCount} />
          )}
        </RenderPropsCounter> */}
        {/* 
        <RenderPropsCounter>
          {(count, incrementCount) => (
            <HoverCounter2 count={count} incrementCount={incrementCount} />
          )}
        </RenderPropsCounter> */}








        {/* <ClickCounter2 /> */}
        {/* <HoverCounter2 /> */}
        {/* <User render={(isLoggedIn) => isLoggedIn ? 'Jatin':'Guest'} /> */}


        {/* <ClickCounter name="Jatin"/> */}

        {/* <HoverCounter name="Jain" /> */}

        {/* <PortalDemo /> */}

        {/* <FRIParentInput /> */}

        {/* <Exercise3Parent /> */}

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
