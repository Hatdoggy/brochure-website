import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import Products,{More} from './Products.jsx';
import Contact from './Contact.jsx';

function Main(props) {
  return (
    <div>
      <Content classes={props.styles}/>
      <Products set={props.curFunc}/>
      <Contact classes={props.styles}/>
    </div>
  );
}

export default Main;
