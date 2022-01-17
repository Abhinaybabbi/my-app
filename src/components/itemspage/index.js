
function Items(props) {
  const {products, handlecart , handleclick,deleteitem}=props;
    

    return (
        <div className="bg-grey-100">
         
          <h2 className="font-bold text-xl  text-black">Products</h2>
          <hr className="bg-gray-100 h-0.5 w-auto  "></hr>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          
          <br/>
  
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product._id} href={product.href} className="group" onClick={()=>handleclick()}>
                <div className="w-auto h-70 aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8" >
                  <img
                    src={product.image}
                    alt="items"
                    className="w-auto h-60 object-contain object-cover group-hover:opacity-75"
                  />
                  {/* <p className=" text-sm bg-grey-200 text-black font-semibold">{product.rating[0].rate}⭐ | ({product.rating[0].count})</p> */}
                  
                </div>
                <h3 className="mt-4 text-sm font-bold text-black">{product.title}</h3>
                <p className="mt-1 text-sm text-gray-900">{product.category}</p>
                <p className="mt-1 text-lg font-medium text-gray-900">Rs. {product.price}</p>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={()=>handlecart(product)}> Add to Cart</button>
                {/* <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={()=>deleteitem(product._id)}> Delete </button> */}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Items;
