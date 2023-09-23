import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Test from './components/Test';
import Reactclass from './components/Reactclass';
import MyuseEffect from './components/MyuseEffect';
import Demo from './components/UseEffect_Cleanup';
import ContextProvider from './Hooks/ContextProvider';
import ContextApp from './components/ContextApp';
import ReducerHook from './components/ReducerHook';
import UseRefFun from './components/UseRefFun';
import UseCallbackHook from './components/UseCallbackHook';
import UseMemoHook from './components/UseMemoHook';
// https://www.freecodecamp.org/news/full-guide-to-react-hooks/#useRef-hook
function App() {
  return (
    <ContextProvider>
      <Router>
        <Nav />
        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Test' element={<Test />}></Route>
          <Route path='/Reactclass' element={<Reactclass title={'Destructruing-working'} />}></Route>
          <Route path='/MyuseEffect' element={<MyuseEffect />}></Route>
          <Route path='/Demo' element={<Demo />}></Route>
          <Route path='/ContextApp' element={<ContextApp />}></Route>
          <Route path='/ReducerHook' element={<ReducerHook />}></Route>
          <Route path='/UseRefFun' element={<UseRefFun />}></Route>
          <Route path='/UseCallbackHook' element={<UseCallbackHook />}></Route>
          <Route path='/UseMemoHook' element={<UseMemoHook />}></Route>

        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;

