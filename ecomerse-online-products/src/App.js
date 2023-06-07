import { useState } from 'react';
import logo from './logo.svg';

import './App.css';

import prod from "./Products"
function App() {
  var [products,setProducts] = useState(prod);
  var [pcount,setpCount] = useState(prod.length);  
  var[cart,setCart]=useState([]);
  var [ctcount,setCtcount]=useState(0);
  
var fun1=(()=>{
    setProducts(prod)
  })
var fun2=(()=>{
     
    var a=document.getElementById("i1").value;
     var b=document.getElementById("i2").value;
     var min=document.getElementById("i3").value;
     var max=document.getElementById("i4").value;

if(a!=""&&b==""&&max==""&&min==""){
  setProducts(prod.filter((ele)=>{return ele.brand==a}));
  //setpCount(products.length)
}
else if(a==""&&b!=""&&max==""&&min==""){
  setProducts(prod.filter((ele)=>{return ele.catagery==b}));
  //setpCount(products.length)
}
else if(a==""&&b==""&&max!=""&&min==""){
  setProducts(prod.filter((ele)=>{return ele.price<=min}))
  //setpCount(products.length)
}
else if(a==""&&b==""&&max==""&&min!=""){

  setProducts(prod.filter((ele)=>{return ele.price>=max}))
  //setpCount(products.length)
}
//two
else if(a!=""&&b!=""&&max==""&&min==""){
  setProducts(prod.filter((ele)=>{return ele.brand=a && ele.catagery==b}));
  //setpCount(products.length)
}
else if(a!=""&&b==""&&max!=""&&min==""){
  setProducts(prod.filter((ele)=>{return ele.price<=max && ele.brand==a}))
  //setpCount(products.length)
}
else if(a!=""&&b==""&&max==""&&min!=""){
  setProducts(prod.filter((ele)=>{return ele.brand==a && ele.price>=min}));
  //setpCount(products.length)
}
else if(a==""&&b!=""&&max!=""&&min==""){
  setProducts(prod.filter((ele)=>{return ele.price<=max && ele.price==b}));
  //setpCount(products.length);
}
else if(a==""&&b!=""&&max==""&&min!=""){
  setProducts(prod.filter((ele)=>{return ele.price>=min && ele.catagery==b}));
  //setpCount(products.length);
}
else if(a==""&&b==""&&max!=""&&min!=""){
  setProducts(prod.filter((ele)=>{return ele.price>=min && ele.price<=max}))
  //setpCount(products.length);
}
//three
else if(a!=""&&b!=""&&max!=""&&min==""){
  setProducts(prod.filter((ele)=>{return ele.brand==a && ele.price<=b && ele.price<=max}))
  //setpCount(products.length);
}
else if(a==""&&b!=""&&max!=""&&min!=""){
  setProducts(prod.filter((ele)=>{return ele.catagery==b && ele.price>=min && ele.price<=max}))
  //setpCount(products.length);
}
else if(a!=""&&b==""&&max!=""&&min!=""){
  setProducts(prod.filter((ele)=>{return ele.brand==a && ele.price>=min && ele.price<=max}))
  //setpCount(products.length)
}
else if(a!=""&&b!=""&&max==""&&min!=""){
  setProducts(prod.filter((ele)=>{return ele.brand==a && ele.price>=min && ele.catagery==b}))
  //setpCount(products.length)
}
else if(a!=""&&b!=""&&max!=""&&min==""){
  setProducts(prod.filter((ele)=>{return ele.brand==a && ele.price>=min && ele.price==b}))
  //setpCount(products.length)
}
//four
else if(a!=""&&b!=""&&max!=""&&min!=""){
  setProducts(prod.filter((ele)=>{return ele.brand==a && ele.price>=min && ele.price<=max && ele.catagery==b}))

  //setpCount(products.length)
}
else{
  setProducts(prod)
}
 })
var fun3=(()=>{
  setCart(cart.push())
})
 
    

return (
  <div>
  <div className='cataineir t1'>
  <div className='row r1'>
    <div className='col c1'>crownzone</div>
    </div>

  <div className='row r2'>
    <div className='col c2' >
      <marquee >
      <img className='i1' src='images/fashion/shopping (1).webp'></img>
      <img className='i1' src='images/electronics/phone 1.jpg'></img>
      <img className='i1' src='images/electronics/download (9).jpg'></img>
      <img className='i1' src='images/electronics/laptap1.jpg'></img>
      <img className='i1' src='images/electronics/images (4).jpg'></img>
      <img className='i1' src='images/electronics/download (25).jpg'></img>
      <img className='i1' src='images/fashion/shopping (18).webp'></img>
      <img className='i1' src='images/fashion/shopping (28).webp'></img>
      <img className='i1' src='images/fashion/shopping (53).webp'></img>
      </marquee> </div>
  </div>
  
  {/* <button onClick={fun1}>all product</button> */}

      brand:<input type="text"id="i1" onChange={fun2}></input>
      category:<input type="text"id="i2" onChange={fun2}></input>
      minprice:<input type="text"id="i3" onChange={fun2}></input>
      maxprice:<input type="text"id="i4" onChange={fun2}></input>
       {/* <button onClick={fun2}>get products</button> */}
      

<button onClick={()=>{setCart(cart);
                   console.log(cart)
                   }}>cart items</button>

<p>count:{ctcount}</p>

{/* <p>Products Found:{products.length} </p>
  */}
<div style={{background:'grey'}}>

{cart.map((p)=>{ 
   
   return <div className="card">
  <h6> ID:{p.id}</h6>
  <h6>Brand: {p.brand}  {p.name}</h6>
  <img src={p.image}></img>
   <p> RS:{p.price}\-</p>
   <p> {p.description}</p>
     </div> 
  }
  )} 
</div>
 </div>
 {products.map((p)=>{ 
   
    return <div className="card">
   <h6> ID:{p.id}</h6>
   <h6>Brand: {p.brand}  {p.name}</h6>
   <img src={p.image}></img>
    <p> RS:{p.price}\-</p>
    <p> {p.description}</p>

    <button className='btn btn-warning' onClick={()=>{
        setCtcount(ctcount+1);
      cart.push(p);
       setCart(cart);
       console.log(cart) ;}}>Add to Cart</button><br></br>
      </div> 
   }
   )} 
  </div>

  );
}
export default App;