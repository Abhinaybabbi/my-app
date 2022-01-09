import { useEffect, useState } from "react";

import './App.css';
import Sidebar from './components/Filter';
import Items from './components/itemspage/index';
import Nav from './components/Navbar/index2';
import axios from "axios";


function App() {  
  const [products, setProducts] = useState([]);
  const [cart,setCart]= useState([]);
  const [clicks,setClicks] = useState(0);
  

    useEffect(async() => {
        fetchitems();
        
    }, []);


//fetching data from api
    const apiurl = "https://fakestoreapi.com/products";
    const apiurl1 ="http://localhost:5000/";
    const fetchitems = async() => {
        await fetch(apiurl1)
            .then((res) => res.json())
            
            .then((y) => setProducts(y.data[0].data))
          
            

    };

    //sending data from api to backend  
    const datadb=async ()=>{
      const data = products;
      console.log(data);
      await axios.post('http://localhost:5000/data', data)
      .then((response)=>{
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    // click handler 
    const handleclick = ()=>{
      setClicks(clicks+1)

    }
    //cart handler
    const handlecart = (product)=>{
      const exist = cart.find((x)=>x.id === product.id);
      if(exist){
        setCart(cart.map((x)=> x.id === product.id ? {...exist,qty:exist.qty+1} :x ));
      }else{setCart([...cart,{...product,qty:1}])};
    }
    
    
    

  return (
    <div className='relative flex ' >
    <Nav clicks = {clicks} cartitems ={cart} fetchdata = {()=>datadb} />
    
    {/* <div className='flex'>
    <Sidebar/>
    </div> */}
    <div className='flex flex-col items-center ml-60'>
    
    <Items products={products} handleclick={handleclick} handlecart ={handlecart} cartitems={cart}/>
    <h1>no of clicks:{clicks}</h1>

    </div>
    
    <div className="flex fixed mt-12">
    <div className="  m-9">
            <h3><strong>Cart Items:</strong></h3>
            {cart.map((item)=>(
              <p >{item.qty} x {item.title} </p>)
            )}

            <button className="border-2 border-black rounded-lg p-1 m-1 " onClick={()=>setCart([])}>Clear Cart</button>
          </div>
          
          
    </div>
    
     
      
    </div>
  
  );
}

export default App;
