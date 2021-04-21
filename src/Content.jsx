import React from 'react';
import ReactDOM from 'react-dom';
import {Facebook,Twitter,Instagram} from '@material-ui/icons';
import Circles from './Circles.jsx';
import {Menu} from '@material-ui/icons';
import { useMediaQuery } from 'react-responsive';

function Content(){

    const mobile = useMediaQuery({
      query: '(max-width: 800px)'
    })

    const large = useMediaQuery({
      query:'(min-width: 1280px)'
    });

  if(!mobile){
    document.body.style.backgroundImage = "url('./img/BG1.jpg')";
  }

  return(
    <main className="flex flex-jc-s flex-ai-e m-20 p-20 grow z-1 pos-rel" id="about">

    <div className="flex flex-flx-col flex-ai-ce flex-jc-ce p-20 h-per w-50 " id="white">
      <h1 id="head-text" className="align-center">KP Aesthetics</h1>
      <p className="m-t-5 w-80 align-center">A small business managed by an Engineering student passionate about fashion</p>
      <hr/>
      <p className="m-t-5 w-80 align-center">Specializes in selling direct bodega Baguette bags, brand new clothes, branded overruns, as well as thrifted and reworked items</p>
        <div className="flex m-t-5 flex-jc-ce">
          <Facebook fontSize={large?"large":"default"} style={{fill:"#2c2c2c"}}/>
          <Twitter fontSize={large?"large":"default"} style={{fill:"#2c2c2c"}}/>
          <Instagram fontSize={large?"large":"default"} style={{fill:"#2c2c2c"}}/>
        </div>
    </div>
      <img className={mobile && "h-per"} src={mobile?"./img/Mobile.png":"./img/Main Image.png"} id="main-bg"/>
    </main>
  );
}

export default Content;