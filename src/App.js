import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import List from './components/List';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';

import './appStyles.css'

import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import { Fragment } from 'react';
import Table from './components/Table';
import PureComp from './components/PureComp';
import Parent1Component from './components/Parent1Component';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import EffectCounterOne from './components/EffectCounterOne';
import EffectCounterTwo from './components/EffectCounterTwo';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import React from 'react';
import Parent2Component from './components/Parent2Component';
import CounterUseMemo from './components/CounterUseMemo';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookFunctionalTimer from './components/HookFunctionalTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import UserForm from './components/UserForm';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <h1>Components</h1>
      <Greet></Greet>
      <Hello></Hello>
      <h1>Probes</h1>
      <Welcome name='Alan' age='18'></Welcome>
      <Welcome name='Kartik' age='21'></Welcome>
      <Welcome name='Rohan' age='30'></Welcome>
      <h1>States</h1>
      <Message></Message>
      <Counter></Counter>
      {/* <FunctionClick></FunctionClick> */}
      <EventBind />
      <ParentComponent></ParentComponent>
      <UserGreeting></UserGreeting>
      <List></List>
      <Stylesheet primary='true' />
      <Inline></Inline>
      <div className="App">
        {/* Inline style */}
        <h1 className="error">Error</h1>
        {/* CSS module */}
        <h1 className={styles.success}>Success</h1>
      </div>
      <Form></Form>
      <h1>LifeCycle</h1>
      <LifecycleA></LifecycleA>
      <Fragment></Fragment>
      <h1>Table</h1>
      <Table></Table>
      <h1>Pure Component</h1>
      {/* <Parent1Component></Parent1Component> */}
      <h1>HTTP calls</h1>
      <h3>Get call</h3>
      <PostList></PostList>
      <h3>Post call</h3>
      <PostForm></PostForm>
      <h1>Hooks</h1>
      <HookCounter></HookCounter>
      <HookCounterTwo></HookCounterTwo>
      <HookCounterThree></HookCounterThree>
      <HookCounterFour></HookCounterFour>
      <h1>UseEffect</h1>
      <EffectCounterOne></EffectCounterOne>
      <h1>Conditionally run effects</h1>
      <EffectCounterTwo></EffectCounterTwo>
      <h1>Run Effect only once</h1>
      <HookMouse></HookMouse>
      <MouseContainer></MouseContainer>
      <h1>UseEffect with incorrect dependency</h1>
      <IntervalHookCounter></IntervalHookCounter>
      <h1>Fetching data</h1>
      <DataFetching></DataFetching>
      <h1>UseContext Hook</h1>

      <UserContext.Provider value={'Kartik'}>
        <ChannelContext.Provider value={'ReactJs'}>
          <ComponentC></ComponentC>
        </ChannelContext.Provider >
      </UserContext.Provider>

      <h1>UseCallback Hook</h1>
      <Parent2Component></Parent2Component>
      <h1>UseMemo Hook</h1>
      <CounterUseMemo></CounterUseMemo>
      <h1>UseRef Hook</h1>
      <FocusInput></FocusInput>
      <ClassTimer></ClassTimer>
      <HookFunctionalTimer></HookFunctionalTimer>
      <h1>Custom Hooks</h1>
      <DocTitleOne></DocTitleOne>
      <DocTitleTwo></DocTitleTwo>
      <h1>Counter Custom Hooks</h1>
      <CounterOne></CounterOne>
      <CounterTwo></CounterTwo>
      <h1>Custom Hook UserForm</h1>
      <UserForm></UserForm>




    </div>
  );
}

export default App;
