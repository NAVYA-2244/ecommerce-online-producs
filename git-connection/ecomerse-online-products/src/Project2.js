import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import prod from "./Products"
function Project2() {
  var [products,setProducts] = useState(prod);
  var [pcount,setpCount] = useState(prod.length);  
  var[cart,setCart]=useState([]);
  var [ctcount,setCtcount]=useState(0);
  var [bol,setBol]=useState(true)
  var [remove,setRemove]=useState(true)
  
  useEffect(()=>{
console.log(" I am here");
setCart(cart)

  },[remove])

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
// var fun3=(()=>{
//   setCart(cart.push())
// })
 
    

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
  
  

      brand:<input type="text"id="i1" onChange={fun2}></input>
      category:<input type="text"id="i2" onChange={fun2}></input>
      minprice:<input type="text"id="i3" onChange={fun2}></input>
      maxprice:<input type="text"id="i4" onChange={fun2}></input>
       
      <button className="btn btn-denger" onClick={()=>{setCart(cart);
                              setBol(false);
                              setRemove(!remove) }}>Cart iteams</button>

<p>count:{ctcount}</p>
<p>Products Found:{products.length} </p>

  {bol? products.map((p)=>{ 
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
       console.log(cart) ;}}>Add to Cart</button>
       </div> 
       // it can tru it will be printed
  }): cart.map((p,ind)=>{ 
      return <div className="card">
      <h6> ID:{p.id}</h6>
      <h6>Brand: {p.brand}  {p.name}</h6>
       <img src={p.image}></img>
      <p> RS:{p.price}\-</p>
       <p> {p.description}</p>

       <button onClick={()=>{
        cart.splice(ind,1)
        setCart(cart)
        console.log(cart);
       }}>remove from cart</button>
       
     </div> 
  }
  
  )} 
</div>
</div>
  );
}
export default Project2;










//  var fun1=(()=>{
//     setProducts(prod)
//   })