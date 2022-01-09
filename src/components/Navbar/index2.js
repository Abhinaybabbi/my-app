
const Nav = (props) => {
  const {clicks , cartitems, fetchdata}=props;
 

    let Links =[
      {name:"MEN",link:"/"},
      {name:"WOMEN",link:"/"},
      {name:"KIDS",link:"/"},
      {name:"HOME & LIVING",link:"/"},
      {name:"BEAUTY",link:"/"},
      {name:"STUDIO",link:"/"},
    ];
 
  return (
      
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-spacearound bg-white '>
          <img className="w-12 m-3 ml-4" src="https://cdn.iconscout.com/icon/free/png-256/myntra-2709168-2249158.png"/>
         
      <ul className={'md:flex md:items-center'}>
        {
          Links.map((link)=>(
          
            <li key={link.name} className='md:ml-8 text-base md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 font-bold'>{link.name}</a>
            </li>
     
          ))
        }
     
      </ul>
      <div className="">
      <input className="w-96 m-6 px-4 py-2 bg-gray-100 rounded-md " placeholder='Search for product brand and more'></input>

      </div>
      <div className=" ml-1 mr-1">
        <h3>No of clicks on items: <strong>{clicks}</strong></h3>
      </div>
      <div id="cart">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"  ><strong>Cart : {cartitems.length}</strong></button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={fetchdata()} ><strong>Fetch data </strong></button>


      </div>
    
      
      </div>
      

    </div>
  )
}

export default Nav