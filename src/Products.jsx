import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import productList from "./productList.js";
import { useMediaQuery } from 'react-responsive';

function Products(){

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
              <a href="#" className="p-2 flex flex-ai-ce flex-jc-ce m-t-5 btn">View more Products</a>
        </div>}
    </div>
    </main>
  );
}

export default Products;
