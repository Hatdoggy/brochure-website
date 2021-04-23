import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import productList from "./productList.js";
import { useMediaQuery } from 'react-responsive';
import {ViewModuleRounded as Grid,ViewHeadline as Flex} from '@material-ui/icons';
import anime from 'animejs';

function Products(prop){

    const mobile = useMediaQuery({
      query: '(max-width: 480px)'
    })

    const [desc,setDesc] = useState({
      item:"Puff Red dress",
      descr:"Part of 6th SUSTAINABLE COLLECTION Boutique Dresses from Korea",
      size:["S"]
    });

    const scroll = (event)=>{
      let y = event.deltaY;
      let x = event.deltaX;
      let target = event.currentTarget;
      event.preventDefault();
      target.scrollLeft+=y*50;
    }

    const selected = (event)=>{
      let item = event.target.alt;
      let sel = productList.filter((x)=>x.alt === item);
      sel = sel[0];
      setDesc({
        item:sel.alt,
        descr:sel.desc,
        size:sel.size
      });
    }

  const [load,setLoad] =useState(false);

  useEffect(()=>{
    !load&&    anime({
          targets: "#kp-slide img",
          translateY:[-300,0],
          delay: anime.stagger(100),
          duration:100,
          complete:setLoad(true)
        })
  });

  if(!mobile){
    document.body.style.backgroundImage = "url('./img/BG2.jpg')";
  }

  return(
    <main className="flex flex-jc-ce flex-ai-ce m-20 p-20 grow z-1 pos-rel w-100" id="prods">

      <div className="flex m-l-2 m-r-2 over-hide w-100">
        <div className="flex h-cus over-hide over-srl-x" id="kp-slide" onWheel={scroll}>
          {productList.map((x,index) => (
          <div className="flex h-per flex-flx-col">
            <img key={index} src={x.src} alt={x.alt} className="h-per m-l-2" id="prod-img" onClick={selected}/>
            {mobile &&
                <div className="flex flex-jc-ce flex-flx-col flex-ai-ce m-l-2" id="item-desc">
                  <h4 className="m-t-5 align-center">{x.alt}</h4>
                  <p className="w-50 m-t-5" id="descr">{x.desc}</p>
                    <div id="av-size" className="flex flex-jc-ce m-t-5">
                      {x.size.map((i,index)=>(
                        <span key={index} className="size">{i}</span>
                      ))}
                    </div>
                </div>
            }
          </div>
          ))}
        </div>
      {!mobile &&
          <div id="dsc" className="m-l-5 w-100">
            <h1 id="item">{desc.item}</h1>
              <p className="w-50 m-t-2" id="descr">{desc.descr}</p>
            <div className="flex sizes m-t-2">
              <p>Available Sizes</p>
              <div id="av-size">
                {desc.size.map((x,index)=>(
                <span key={index} className="size">{x}</span>
                ))}
              </div>
            </div>
              <a onClick={prop.set} name="more" className="p-2 flex flex-ai-ce flex-jc-ce m-t-5 btn">View more Products</a>
        </div>}
    </div>
    </main>
  );
}

export default Products;

function More(){

    const mobile = useMediaQuery({
      query: '(max-width: 480px)'
    })

  useEffect(()=>{
    document.body.style.backgroundImage = "none";
  });

  const change = (event)=>{
    let cur = event.target.localName;
    let elem = document.querySelector("#cont");
    const cl = ["flex","flex-jc-ce","m-20","grow","z-1","pos-rel"];

    const check = (name)=>{
      if(name=="layout"){
        cl.forEach((item, i) => {
          elem.classList.remove(item);
        });
        elem.classList.add("layout");
      }else{
        elem.classList.remove("layout");
        cl.forEach((item, i) => {
          elem.classList.add(item);
        });
      }
    }

    switch (cur) {
      case "path":
        check(event.target.parentNode.parentNode.name);
        break;
      case "svg":
        check(event.target.parentNode.name);
        break;
      default:
        check(event.target.name);
    }
  }

    useEffect(()=>{
      anime({
        targets: ".grid img",
        translateY:[-50,0],
        duration:1500,
        delay: anime.stagger(200),
      });
    });

  return(
      <main className={mobile?"flex flex-jc-ce m-20 grow z-1 pos-rel":"flex flex-jc-ce m-20 p-20 grow z-1 pos-rel"} id="more">
        {mobile?
          <div>
            <header className="w-100 flex flex-ai-ce" id="banner">
              <div className="flex flex-flx-col flex-jc-ce p-20 w-30 h-per">
                <h1>Change BG here</h1>
                <p className="m-t-2">Testing</p>
              </div>
            </header>
              <div className="flex flex-flx-col">
                <div className="flex flex-jc-e flex-ai-ce m-t-5 p-20 style">
                  <h4>Style</h4>
                  <a className="m-l-2" onClick={change} name="layout"><Grid fontSize="default"/></a>
                  <a className="m-l-2 m-r-2" onClick={change} name="flex"><Flex fontSize="default"/></a>
                </div>

                <div className="flex flex-flx-col flex-jc-ce flex-ai-ce m-t-5 p-20" id="cont">
                  {productList.map((item,ndx) => (
                    <div className="container m-t-5 flex flex-flx-col flex-jc-ce">
                      <img key={ndx} src={item.src} alt={item.alt}/>
                      <div className="flex flex-flx-col flex-ai-ce m-t-2">
                        <p className="align-center">{item.alt.substring(0,16)}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
          </div>
          :<div className="flex flex-flx-col w-100">
            <header className="w-100 flex flex-ai-ce" id="banner">
              <div className="flex flex-flx-col flex-jc-ce p-20 w-30 h-per">
                <h1>Change BG here</h1>
                <p className="m-t-2">Testing</p>
              </div>
            </header>
            <div className="grid w-100">
              {productList.map((item,ndx)=>(
                <div className="container flex flex-flx-col flex-jc-ce">
                  <div className="flex flex-jc-ce">
                    <img key={ndx} src={item.src} alt={item.alt}/>
                  </div>
                  <div className="flex flex-flx-col flex-ai-ce m-t-2">
                    <h2 className="align-center font-rob">{item.alt.length >= 16?item.alt.substring(0,16)+"...":item.alt}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      </main>
  );
}

export {More};
