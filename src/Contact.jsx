import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom';
import {Facebook,Twitter,Instagram} from '@material-ui/icons';
import { useMediaQuery } from 'react-responsive';
import anime from 'animejs';

function Contact(props){

    const mobile = useMediaQuery({
      query: '(max-width: 480px)'
    })

    const large = useMediaQuery({
      query:'(min-width: 1280px)'
    });

  if(!mobile){
    document.body.style.backgroundImage = "url('./img/BG3.jpg')";
  }

  const [load,setLoad] =useState(false);

  useEffect(()=>{
    !load&&anime({
      targets: "#bg-cont",
      opacity:1,
      duration:1500,
      delay:500,
      complete:setLoad(true)
    });
  });

  return(
    <main className="flex flex-jc-e flex-ai-e m-20 p-20 grow z-1 pos-rel" id="contact">
      {!mobile &&
          <div className="flex flex-jc-ce h-per w-50" id="white">
            <div className="flex z-0" id="bg-cont">
              <img src="./img/main 2.png" id="contact-bg"/>
              <img src="./img/Main Image.png" id="contact-bg2"/>
            </div>
            <div className="flex flex-jc-ce flex-ai-ce flex-flx-col w-80 align-right h-per z-1">
              <h1 id="head-text" className="align-center">Lorem Ipsum</h1>
              <p className="align-center m-t-5 w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <hr/>
              <p className="align-center m-t-5 w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="flex flex-jc-ce m-t-5">
                <a href="https://www.facebook.com/kpaestheticsph"><Facebook fontSize={large?"large":"default"} style={{fill:"#2c2c2c"}} className={props.classes.logo}/></a>
                <a href="https://www.instagram.com/kpaestheticsph/"><Instagram fontSize={large?"large":"default"} style={{fill:"#2c2c2c"}}/></a>
              </div>
            </div>
          </div>
      }

      {mobile &&
        <div className="flex flex-flx-col flex-ai-ce flex-jc-ce p-20 h-per f-col">
        <img src="./img/mobile 2.png" className="w-100 pos-abs z-0" id="contact-bg"/>
        <div className="flex flex-jc-e flex-ai-ce flex-flx-col w-50 align-right h-per z-1">
          <h1 id="head-text" className="align-center">Lorem Ipsum</h1>
          <p className="align-center m-t-5 w-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="flex flex-jc-ce m-t-5">
            <Facebook fontSize="large" style={{fill:"#2c2c2c"}}/>
            <Twitter fontSize="large" style={{fill:"#2c2c2c"}}/>
            <Instagram fontSize="large" style={{fill:"#2c2c2c"}}/>
          </div>
        </div>

        </div>
      }


    </main>
  );
}

export default Contact;
