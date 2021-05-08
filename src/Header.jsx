import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import {Menu} from '@material-ui/icons';
import {Drawer,Button} from '@material-ui/core';
import { Link,animateScroll as scroll } from 'react-scroll';
import anime from 'animejs';
import {Link as RLink} from "react-router-dom";

function Header(prop){

    const [btn,setBtn] = useState(false);

    const mobile = useMediaQuery({
      query: '(max-width: 800px)'
    })

    const pad = useMediaQuery({
      query:'(min-width:1024px) and (max-width:1300px)'
    });

    const lar = useMediaQuery({
      query:'(min-width: 1440px)'
    });

  if(!mobile){
    anime({
      targets: ["nav a","nav div"],
      translateY:[-50,0],
      duration:1500,
      delay: anime.stagger(200),
    });
  }else{
      let time = anime.timeline({
        easing: "easeOutExpo",
        duration: 500,
      });
      time
          .add({
            targets: ["nav"],
            translateY:[-50,0],
            duration:1500,
          })
          .add({
            targets: ["nav a","nav div"],
            translateY:[-50,0],
            duration:1500,
            delay: anime.stagger(200),
          })
  }

  useEffect(()=>{
    let clicks = document.querySelectorAll(".click");

    clicks.forEach((item) => {
      item.addEventListener("click",()=>prop.res(false));
    });

  });


  const sample = ()=>{
    console.log("Henlo");
  }

  return(
    <nav className={mobile?"m-l-auto flex p-5 m-r-2 z-50 shadow":"m-l-auto flex p-5 m-r-2 z-50 "}>
    {(mobile||pad)?
      <header className="flex w-100">
      <div className="flex w-100 p-20 flex-ai-ce">
        <img src="./img/KPLogo.jpg" className="logo"/>

      <Button>
        <Menu onClick={()=>setBtn(true)} onClose={()=>setBtn(false)}/>
          <Drawer anchor="top" open={btn} onClose={()=>{setBtn(!btn)}}>
          {prop.cur?
            <div className="flex flex-jc-e flex-flx-col flex-ai-e">
              <a className="m-r-2 p-20"  name="contact" onClick={prop.res} name="more"><RLink to="/">Home</RLink></a>
              <a className="m-r-2 p-20"  name="contact" onClick={prop.set} name="more">More Products</a>
            </div>
          :<div className="flex flex-jc-e flex-flx-col flex-ai-e">
            <a className="m-r-2 p-20"  name="about" ><Link to="about" spy={true} smooth={true}>About</Link></a>
            <a className="m-r-2 p-20"  name="product" ><Link to="prods" spy={true} smooth={true}>Featured products</Link></a>
            <a className="m-r-2 p-20"  name="contact" ><Link to="contact" spy={true} smooth={true}>Contact</Link></a>
            <a className="m-r-2 p-20" onClick={prop.set}><RLink to="/more" name="more">More Products</RLink></a>
          </div>}

          </Drawer>
      </Button></div>
      </header>
    :
      prop.cur?
        <div className="flex p-20 flex-ai-ce flex-jc-ce w-100">
            <div className="">
              <img src="https://dl.dropboxusercontent.com/s/4y7b9n6sni0fbji/KPLogo.jpg?dl=0" className="logo"/>
            </div>
          <a className="m-l-5" onClick={prop.set} name="about"><RLink to="/">Home</RLink></a>
        </div>
      :
        <div className="flex p-20 flex-jc-ce flex-ai-ce w-100">
            <div className="m-l-2">
              <img src="https://dl.dropboxusercontent.com/s/4y7b9n6sni0fbji/KPLogo.jpg?dl=0" className="logo"/>
            </div>
          <a className="m-l-5 click" name="about"><Link to="about" spy={true} smooth={true}>About</Link></a>
          <a className="m-l-5 click" name="product"><Link to="prods" spy={true} smooth={true}>Featured</Link></a>
          <a className="m-l-5 click" name="contact"><Link to="contact" spy={true} smooth={true}>Contact</Link></a>

        </div>
    }
    </nav>
  );
}

export default Header;
