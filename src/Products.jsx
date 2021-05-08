import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import productList,{gallery,banner,moban,mobSlide,mobFeat} from "./productList.js";
import { useMediaQuery } from 'react-responsive';
import {ViewModuleRounded as Grid,ViewHeadline as Flex} from '@material-ui/icons';
import {Link} from "react-router-dom";
import anime from 'animejs';

function Products(prop){

    const mobile = useMediaQuery({
      query: '(max-width: 480px)'
    })

    const pad = useMediaQuery({
      query:'(min-width:768px) and (max-width:1024px)'
    });

    const [src,setSrc] = useState({
      src:"https://dl.dropboxusercontent.com/s/c3j011g40mvflbe/slide3.jpg?dl=0",
      alt:"Puff Red dress"
    });

    const [desc,setDesc] = useState({
      item:"Puff Red dress",
      descr:"Part of 6th SUSTAINABLE COLLECTION Boutique Dresses from Korea",
      size:["S"]
    });

    useEffect(()=>{
      let slide = document.querySelector("#kp-slide");

      slide.addEventListener("wheel",(event)=>{
        let y = event.deltaY;
        event.preventDefault();
        slide.scrollLeft += y*5;
      });
    });

    const [pos,updPos]=useState(0);

    const selected = (event)=>{
      let item = event.target.alt;
      let sel = productList.filter((x)=>x.alt === item);
      sel = sel[0];
      setDesc({
        item:sel.alt,
        descr:sel.desc,
        size:sel.size
      });

      setSrc({
        src:sel.src,
        alt:sel.alt
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

  return(
    <main className="flex flex-jc-ce flex-ai-ce m-20 p-20 grow z-1 pos-rel w-100 over-hide" id="prods">

      <div className="flex m-l-2 m-r-2 over-hide w-100" id="kp-cont">
        <div className="flex flex-jc-ce flex-ai-ce flex-flx-col p-20 w-50" id="cont">

          {pad?
            <div className="flex flex-jc-ce flex-ai-ce flex-flx-col w-50">
          <div className="flex flex-jc-ce flex-ai-ce flex-flx-col p-20 h-50 m-b-2 w-100" id="prv-img">
            <div className="flex flex-jc-ce flex-ai-ce flex-flx-col p-20 w-100 over-hide">
              <img className="disp" src={src.src} alt={src.alt}/>
            </div>
          </div>
            <div className="flex h-cus over-hide over-srl-x w-100" id="kp-slide" >
            {productList.map((x,index) => (
            <div className="flex h-per flex-flx-col">
              <img key={index} src={x.src} alt={x.alt} className="h-per m-l-2 product" id="prod-img" onClick={mobile?prop.set:selected}/>
            </div>))}
            </div>
            </div>
          :
          <div className="flex h-cus over-hide over-srl-x w-100" id="kp-slide" >
            {productList.map((x,index) => (
            <div className="flex h-per flex-flx-col">

              <img key={index} src={x.src} alt={x.alt} className="h-per m-l-2 product" id="prod-img" onClick={mobile?prop.set:selected}/>
              {mobile && //description of product in mobile
                  <div className="flex flex-jc-ce flex-flx-col flex-ai-ce m-l-2" id="item-desc" >
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
          </div>}

          {!mobile && //description for pad or desktop
            <div id="dsc" className="w-100 m-t-5">
              <h4 id="item" className="align-center">{desc.item}</h4>
              <div className="flex flex-flx-col m-t-2">
                <p className="w-100 m-t-2 align-center" id="descr">{desc.descr}</p>
                <div className="flex sizes m-t-2 w-100">
                  <div id="av-size">
                    {desc.size.map((x,index)=>(
                      <span key={index} className="size">{x}</span>
                    ))}
                  </div>
                </div>
              <Link to="/more">
                <a className="p-2 flex flex-ai-ce flex-jc-ce m-t-2 btn w-100" onClick={prop.set} name="more">More Products</a>
              </Link>
            </div>
          </div>}
        </div>

      {!pad&&
        <div className="flex flex-jc-ce flex-ai-ce flex-flx-col p-20 h-vh-100 w-50">
          <div className="flex flex-jc-ce flex-ai-ce flex-flx-col p-20 w-100 over-hide">
            <img className="disp" src={src.src} alt={src.alt}/>
          </div>
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

    const large = useMediaQuery({
      query:'(min-width: 1440px)'
    });

  const slide = (ndx,slides)=>{
    if(ndx == slides.length) ndx=1;
    slides.forEach((item) => {
      item.style.display="none";
      item.style.opacity="0";
    });

    slides[ndx-1].style.display = "block";
    slides[ndx-1].style.opacity = "1";
    ndx=ndx+1;
    setTimeout(()=>slide(ndx,slides),2500);
  };

  const redirect = (url)=>{
    window.location.href = url;
  };

    useEffect(()=>{
      anime({
        targets: ".grid img",
        translateY:[-50,0],
        duration:1500,
        delay: anime.stagger(200),
      });
      let slideNdx=1;
      let elem = document.querySelectorAll(".carousel");
      slide(slideNdx,elem);
    });

  return(
      <main className={mobile?"flex flex-jc-ce m-20 grow z-1 pos-rel":"flex flex-jc-ce m-20 p-20 grow z-1 pos-rel"} id="more">
        {mobile?
          <div className="h-vh-100">
            <header className="w-100 flex flex-ai-ce m-t-15  over-hide" id="banner">
              <div key="index" className="car-cont p-10 w-100">
                {moban.map((item,index) => (
                  <img src={item.src} alt={item.alt} className="carousel fade"/>
                ))}
              </div>
            </header>
              <div className="flex flex-flx-col">
                <div className="flex flex-jc-e flex-ai-ce m-t-5 p-20 style">
                  <h4>Style</h4>
                  <a className="m-l-2" onClick={change} name="layout"><Grid fontSize="default"/></a>
                  <a className="m-l-2 m-r-2" onClick={change} name="flex"><Flex fontSize="default"/></a>
                </div>

                <div className="flex flex-flx-col flex-jc-ce flex-ai-ce m-t-5 p-20" id="cont">
                  {gallery.map((item,ndx) => (
                    <div className="container m-t-5 flex flex-flx-col flex-jc-ce" onClick={()=>redirect(item.link)}>
                      <img key={ndx} src={item.src} alt={item.alt} onClick={()=>redirect(item.link)}/>
                      <div className="flex flex-flx-col flex-ai-ce flex-jc-ce m-t-2">
                        <p className="align-center">{item.alt.substring(0,16)}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
          </div>
          :<div className="flex flex-flx-col w-100">
            <header className="w-100 flex flex-jc-ce flex-ai-ce m-b-2 pos-rel" id="banner">
              {banner.map((item,index) => (
                <img src={item.src} alt={item.alt} className="carousel fade"/>
              ))}
            </header>
            <div className="grid w-100">
              {gallery.map((item,ndx)=>(
                <div className="container flex flex-flx-col flex-jc-ce" onClick={()=>redirect(item.link)}>
                  <div className="flex flex-jc-ce">
                    <img key={ndx} src={item.src} alt={item.alt} onClick={()=>redirect(item.link)}/>
                  </div>
                  <div className="flex flex-flx-col flex-ai-ce m-t-2">
                    <p className="align-center font-rob">{item.alt.length >= 16?item.alt.substring(0,16)+"...":item.alt}</p>
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
