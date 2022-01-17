import { useEffect, useState } from "react";

import './App.css';
import Items from './components/itemspage/index';
import Nav from './components/Navbar/index2';
import axios from "axios";
// import {Router } from "react-router";


function App() {  
  const [products, setProducts] = useState([]);
  const [cart,setCart]= useState([]);
  const [clicks,setClicks] = useState(0);
  // const [id,setId] = useState(0);
  

  useEffect(() => {
    fetchitems();        
  }, []);


//fetching data from api
    // const apiurl = "https://fakestoreapi.com/products";
    // You can Find link to backend code in my repo https://github.com/Abhinaybabbi/Myntra-clone
    const apiurl ="http://localhost:5000/";
    const fetchitems = async() => {
        await fetch(apiurl)
            .then((res) => res.json())
            // .then((data)=>setProducts(data))
            
            .then((y) => setProducts(y.data));         

    };

    //sending data from api to backend  
    const dataDb= async ()=>{

      const data = products;  

      for (let product of data){
        await axios.post('http://localhost:5000/item', {
          category:product.category,
          description:product.description,
          id:product.id,
          image:product.image,
          price:product.price,   
          title:product.title,

        })
      .then((response)=>{
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      }
      
    }

    const deleteitem = async(id)=>{
      // setId(passedId);
      await axios.post("http://localhost:5000/", {
        id
        
        
      });

    }





    // click handler 
    const handleClick = ()=>{
      setClicks(clicks+1)

    }
    //cart handler
    const handleCart = (product)=>{
      const exist = cart.find((x)=>x.id === product.id);
      if(exist){
        setCart(cart.map((x)=> x.id === product.id ? {...exist,qty:exist.qty+1} :x ));
      }else{setCart([...cart,{...product,qty:1}])};
    }
    
    
    

  return (
    <div className='relative flex ' >
    <Nav clicks = {clicks} cartitems ={cart} fetchdata = {()=>dataDb} />
    
    {/* <div className='flex'>
    <Sidebar/>
    </div> */}
    <div className='flex flex-col items-center ml-60'>
    
    <Items products={products} handleclick={handleClick} handlecart ={handleCart} cartitems={cart} deleteitem={deleteitem}/>
    <h1>no of clicks:{clicks}</h1>

    </div>
    
    <div className="flex fixed mt-12">
    <div className="  m-9">
            <h3><strong>Cart Items:</strong></h3>
            {cart.map((item)=>(
              <p key={item.id}>{item.qty} x {item.title} </p>)
            )}

            <button className="border-2 border-black rounded-lg p-1 m-1 " onClick={()=>setCart([])}>Clear Cart</button>
          </div>
          
          
    </div>
    
     
      
    </div>
  
  );
}

export default App;
