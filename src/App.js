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
      query: '(max-width: 480px)'
    });

    const pad = useMediaQuery({
      query:'(min-width:481px) and (max-width:1366px)'
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
    <Router basename={`/${process.env.PUBLIC_URL}`}>
    <div className={cur.more?"flex flex-flx-col":"h-vh-100 flex flex-flx-col"}>
      <Header set={curFunc} cur={cur.more} res={reset}/>

      {mobile||pad?
            (cur.more?<More/>:
              <div>
                <Content classes={styles}/>
                <Products set={curFunc}/>
                <Contact classes={styles}/>
              </div>
            )
            :
            <div className={cur.more?"flex":"flex h-vh-100"}>
              <Switch>
                <Route exact path="/" component={Content}/>
                <Route exact path="/prod" component={Products}/>

                <Route exact path="/cont">
                  <Contact classes={styles}/>
                </Route>

                <Route exact path="/more" component={More}/>
              </Switch>
            </div>}

      {!(mobile&&cur.clicked) && <Circles setClick={cur.clicked?reset:undefined}/>}
    </div>
    </Router>
  );
}

export default App;
