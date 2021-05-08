import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Circles from './Circles.jsx';
import {More} from './Products.jsx';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import Main from './Main.jsx';

function App() {

    const mobile = useMediaQuery({
      query: '(max-width: 480px)'
    });

    const pad = useMediaQuery({
      query:'(min-width:481px) and (max-width:1366px)'
    });

  const [cur,setCur] = useState({
    clicked:false,
    about:true,
    product:false,
    contact:false,
    more:false
  });

  const curFunc = (key)=>{
    if(cur.clicked)setCur({clicked:false});
    setCur({
      about:false,
      product:false,
      contact:false,
      clicked:true,
      more:false,
      [key.target.name]:true
    });
  };

    const styles ={
    logo: {
      '&:hover': {
         background: "#ffb185",
      }
    }
    };

  const reset = (check)=>{
    let type = typeof check;

    if(type !== "undefined" && check === false){
        setCur({
          clicked:true,
        });
    }else {
    setCur({
      clicked:false,
      more:false
    });
    }
  }

  return (
    <Router>
    <div className={cur.more?"flex flex-flx-col":"h-vh-100 flex flex-flx-col"}>
      <Header set={curFunc} cur={cur.more} res={reset}/>

      <Switch>
        <Route path="/" exact render={(props) => (
          <Main styles={styles} curFunc={curFunc} />
      )}/>
        <Route path="/more" component={More}/>
      </Switch>

      {!mobile && <Circles setClick={cur.clicked?reset:undefined}/>}
    </div>
    </Router>
  );
}

export default App;
