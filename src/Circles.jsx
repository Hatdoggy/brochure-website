import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import { useMediaQuery } from 'react-responsive';

function Circle(prop){

    const big = useMediaQuery({
      query: '(min-width: 1919px)'
    })

  const gen = ()=>{
    return Math.floor(Math.random()*(!big?850:420));
  };

  useEffect(()=>{
    let c1 =document.querySelector("#c1");
    let c2 =document.querySelector("#c2");
    let c3 =document.querySelector("#c3");
    c1.style.top = gen() + 'px';
    c1.style.right = gen() + 'px';
    c3.style.top = gen() + 'px';
    c3.style.right = gen() + 'px';
    c2.style.top = gen() + 'px';
    c2.style.left = gen() + 'px';
  });

  gen();

  return(
    <span className="z-0" id="circ-cont">
      <div className="circle circle-s pos-abs abs-r" id="c1"></div>
      <div className="circle circle-m pos-abs abs-t" id="c2"></div>
      <div className="circle circle-l pos-abs abs-m" id="c3"></div>
    </span>
  );
}

export default Circle;
