import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import {Menu} from '@material-ui/icons';
import {Drawer,Button} from '@material-ui/core';
import { Link } from 'react-scroll';

function Header(prop){

    const [btn,setBtn] = useState(false);

    const mobile = useMediaQuery({
      query: '(max-width: 800px)'
    })

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
            <div className="flex flex-jc-e flex-flx-col flex-ai-e">
              <a className="m-r-2 p-20"  name="contact"><Link to="about" spy={true} smooth={true}>About</Link></a>
              <a className="m-r-2 p-20"  name="contact"><Link to="prods" spy={true} smooth={true}>Product</Link></a>
              <a className="m-r-2 p-20"  name="contact"><Link to="contact" spy={true} smooth={true}>Contact</Link></a>
            </div>
          </Drawer>
      </Button>
      </header>
    }
    {!mobile &&
      <div className="flex p-20 flex-ai-ce">
        <a className="" onClick={prop.set} name="about">About</a>
        <a className="m-l-5" onClick={prop.set}  name="product">Product</a>
        <a className="m-l-5 m-r-5" onClick={prop.set}  name="contact">Contact</a>
          <div className="m-l-2">
            <img src="../img/KPLogo.jpg" className="logo"/>
          </div>
      </div>
    }
    </nav>
  );
}

export default Header;
