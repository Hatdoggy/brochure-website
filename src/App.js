import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';
import Circles from './Circles.jsx';
import Products,{More} from './Products.jsx';
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
    contact:false,
    more:false
  });

  const curFunc = (key)=>{
    setCur({
      about:false,
      product:false,
      contact:false,
      clicked:true,
      more:false,
      [key.target.name]:true
    });
  };

  const reset = ()=>{

  document.body.style.backgroundImage = "url('./img/BG1.jpg')";
  console.log(document.body.style.backgroundImage);
    setCur({
      more:false
    });
  }

  return (
    <div className={cur.more?"flex flex-flx-col":"h-vh-100 flex flex-flx-col"}>
      <Header set={curFunc} cur={cur.more} res={reset}/>
      {mobile?
            (cur.more?<More/>:
              <div>
                <Content classes={styles}/>
                <Products/>
                <Contact classes={styles}/>
              </div>
            )
            :
            <div className={cur.more?"flex":"flex h-vh-100"}>
              {cur.about && <Content classes={styles}/>}
              {cur.product && <Products set={curFunc}/>}
              {cur.more && <More/>}
              {cur.contact && <Contact classes={styles}/>}
            </div>}
      {!mobile && <Circles setClick={cur.clicked?reset:undefined}/>}
    </div>
  );
}

export default App;
