import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';


const Nav = () => {


  return (
    <div id='Navbar'>
      <ul>
        <li className="navItem"> <Link to="/"> Home </Link></li>
        <li className="navItem"> <Link to="/about"> About </Link></li>
        <li className="navItem"> <Link to="/contact"> Contact </Link></li>
        <li className="navItem"> <Link to="/test"> Test </Link></li>
        <li className="navItem"> <Link to="/Reactclass"> Reactclass </Link></li>
        <li className="navItem"> <Link to="/MyuseEffect"> MyuseEffect </Link></li>
        <li className="navItem"> <Link to="/Demo"> Demo </Link></li>
        <li className="navItem"> <Link to="/ContextApp"> ContextApp </Link></li>
        <li className="navItem"> <Link to="/ReducerHook"> ReducerHook </Link></li>
        <li className="navItem"> <Link to="/UseRefFun"> UseRefFun </Link></li>
        <li className="navItem"> <Link to="/UseCallbackHook"> UseCallbackHook </Link></li>
        <li className="navItem"> <Link to="/UseMemoHook"> UseMemoHook </Link></li>
      </ul>
 
    </div>
  );
}

export default Nav;
