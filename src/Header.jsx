import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import {Menu} from '@material-ui/icons';
import {Drawer,Button} from '@material-ui/core';
import { Link } from 'react-scroll';
import anime from 'animejs';

function Header(prop){

    const [btn,setBtn] = useState(false);

    const mobile = useMediaQuery({
      query: '(max-width: 800px)'
    })

  if(!mobile){
    document.body.style.backgroundImage = "url('./img/BG1.jpg')";
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

  return(
    <nav className={mobile?"m-l-auto flex flex-jc-e p-5 m-r-2 z-50 shadow":"m-l-auto flex flex-jc-e p-5 m-r-2 z-50 "}>
    {mobile &&
      <header className="flex w-100">
      <div className="flex w-100 p-20 flex-ai-ce">
        <img src="./img/KPLogo.jpg" className="logo"/>
      </div>
      <Button>
        <Menu onClick={()=>setBtn(true)} onClose={()=>setBtn(false)}/>
          <Drawer anchor="top" open={btn} onClose={()=>{setBtn(!btn)}}>
          {prop.cur?
            <div className="flex flex-jc-e flex-flx-col flex-ai-e">
              <a className="m-r-2 p-20"  name="contact" onClick={prop.res} name="more">Home</a>
              <a className="m-r-2 p-20"  name="contact" onClick={prop.set} name="more">More Products</a>
            </div>
          :<div className="flex flex-jc-e flex-flx-col flex-ai-e">
            <a className="m-r-2 p-20"  name="contact" ><Link to="about" spy={true} smooth={true}>About</Link></a>
            <a className="m-r-2 p-20"  name="contact" ><Link to="prods" spy={true} smooth={true}>Featured products</Link></a>
            <a className="m-r-2 p-20"  name="contact" ><Link to="contact" spy={true} smooth={true}>Contact</Link></a>
            <a className="m-r-2 p-20"  name="contact" onClick={prop.set} name="more">More Products</a>
          </div>}

          </Drawer>
      </Button>
      </header>
    }
    {!mobile &&
      <div className="flex p-20 flex-ai-ce">
        <a className="" onClick={prop.set} name="about">About</a>
        <a className="m-l-5" onClick={prop.set}  name="product">Featured</a>
        <a className="m-l-5 m-r-5" onClick={prop.set}  name="contact">Contact</a>
          <div className="m-l-2">
            <img src="./img/KPLogo.jpg" className="logo"/>
          </div>
      </div>
    }
    </nav>
  );
}

export default Header;
