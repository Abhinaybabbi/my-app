import { useEffect, useState } from "react";

import './App.css';
import Sidebar from './components/Filter';
import Items from './components/itemspage/index';
import Nav from './components/Navbar/index2';


function App() {  
  const [products, setProducts] = useState([]);
  const [cart,setCart]= useState([]);
  const [clicks,setClicks] = useState(0);

    useEffect(() => {
        fetchitems();
        datadb();
    }, []);



    const apiurl = "https://fakestoreapi.com/products";
    const fetchitems = () => {
        fetch(apiurl)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            

    };
    const datadb=()=>{
      const data = JSON.stringify(products);
      console.log(data);
      fetch('https://localhost:5000/data', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }

    const handleclick = ()=>{
      setClicks(clicks+1)

    }
    const handlecart = (product)=>{
      const exist = cart.find((x)=>x.id === product.id);
      if(exist){
        setCart(cart.map((x)=> x.id === product.id ? {...exist,qty:exist.qty+1} :x ));
      }else{setCart([...cart,{...product,qty:1}])};
    }
    
    
    

  return (
    <div className='relative flex' >
    <Nav clicks = {clicks} cartitems ={cart}/>
    
    {/* <div className='flex'>
    <Sidebar/>
    </div> */}
    <div className='flex ml-60'>
    
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
