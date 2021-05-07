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

  const pad = useMediaQuery({
    query:'(min-width:481px) and (max-width:1366px)'
  });

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
              <img src={pad?"https://dl.dropboxusercontent.com/s/6d4o0i4ame7sa88/mobile%202.jpg?dl=0":"https://dl.dropboxusercontent.com/s/01oi49wbxucprii/main%202.png?dl=0"} id="contact-bg"/>
              <img src="https://dl.dropboxusercontent.com/s/81m35hymrhkz3ne/Main%20Image.png" id="contact-bg2"/>
            </div>
            <div className="flex flex-jc-ce flex-ai-ce flex-flx-col w-80 align-right h-per z-1" id="web-descr">
          <h1 id="head-text" className="align-center">Contact Us</h1>
          <p className="align-center m-t-5 w-100">You may ask for inquiries, buy products and more at our social media pages just click the icons below</p>
          <h3 id="head-text" className="align-center m-t-5">FAQs</h3>
            <h4 style={{fontWeight:"bold"}} className="m-t-2 align-center">Do you have a wholesale price for your products? </h4>
            <p className="align-center m-t-5 w-100">Yes, wholesale price is always available. This shop is committed to helping fellow business owners</p>
            <h4 style={{fontWeight:"bold"}} className="m-t-2 align-center">Can we borrow your pictures if we become your reseller?</h4>
            <p className="align-center m-t-5 w-100">Yes, my resellers are welcome to grab my photos.</p>
              <div className="flex flex-jc-ce m-t-5">
                <a href="https://www.facebook.com/kpaestheticsph"><Facebook fontSize={large?"large":"default"} style={{fill:"#2c2c2c"}} className={props.classes.logo}/></a>
                <a href="https://www.instagram.com/kpaestheticsph/"><Instagram fontSize={large?"large":"default"} style={{fill:"#2c2c2c"}}/></a>
              </div>
            </div>
          </div>
      }

      {mobile &&
        <div className="flex flex-flx-col flex-ai-ce flex-jc-ce p-20 h-per f-col">
        <img src="https://dl.dropboxusercontent.com/s/6d4o0i4ame7sa88/mobile%202.jpg?dl=0" className="w-100 pos-abs z-0" id="contact-bg"/>
        <div className="flex flex-jc-e flex-ai-ce flex-flx-col w-50 align-right h-per z-1" id="descr">
          <h1 id="head-text" className="align-center">Contact Us</h1>
          <p className="align-center m-t-5 w-50">You may ask for inquiries, buy products and more at our social media pages just click the icons below</p>
          <div className="flex flex-jc-ce m-t-5">
            <Facebook fontSize="large" style={{fill:"#2c2c2c"}}/>
            <Instagram fontSize="large" style={{fill:"#2c2c2c"}}/>
          </div>
        </div>
        </div>
      }
    </main>
  );
}
export default Contact;
