import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';
import Circles from './Circles.jsx';
import Products from './Products.jsx';
import Contact from './Contact.jsx';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

function App() {

    const mobile = useMediaQuery({
      query: '(max-width: 800px)'
    });

    const styles ={
    logo: {
      '&:hover': {
         background: "#ffb185",
      }
    }
    };

  const [cur,setCur] = useState({
    clicked:false,
    about:true,
    product:false,
    contact:false
  });

  const reset = ()=>{
    setCur({
      click:false
    });
    console.log("Hello");
  }

  const curFunc = (key)=>{
    setCur({
      about:false,
      product:false,
      contact:false,
      clicked:true,
      [key.target.name]:true
    });
  };

  return (
    <div className="h-vh-100 flex flex-flx-col">
      <Header set={curFunc}/>
      {mobile?
            <div>
              <Content classes={styles}/>
              <Products/>
              <Contact classes={styles}/>
            </div>
            :
            <div className="flex h-vh-100">
              {cur.about && <Content classes={styles}/>}
              {cur.product && <Products/>}
              {cur.contact && <Contact classes={styles}/>}
            </div>}
      {!mobile && <Circles setClick={cur.clicked?reset:undefined}/>}
    </div>
  );
}

export default App;
