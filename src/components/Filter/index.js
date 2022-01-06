function Sidebar(){
    return(
        <div className=" my-4  mx-20">
            <div className="my-4">
                <hr className = ""></hr>
                <h3 className="font-bold">CATEGORIES</h3>
                <br/>
                <ul>
                    <li><input type="checkbox"/><label className="text-sm text-gray-500"> Tshirts</label></li>
                    <li><input type="checkbox"/><label className="text-sm text-gray-500"> Sweatshirts</label></li>
                    <li><input type="checkbox"/><label className="text-sm text-gray-500"> shirts</label></li>
                    <li><input type="checkbox"/><label className="text-sm text-gray-500"> Track Pants</label></li>
                    <li><input type="checkbox"/><label className="text-sm text-gray-500"> Shorts</label></li>
                </ul>

            </div>
            <div className=" my-4">
            <hr className = ""></hr>
            <h3 className="font-bold">BRAND</h3>
            <br/>
                <ul>
                    <li><input type="checkbox"/><label className="text-sm text-gray-500"> MAX</label></li>
                    <li><input type="checkbox"/><label className="text-sm text-gray-500"> NIKE</label></li>
                    <li><input type="checkbox"/><label className="text-sm text-gray-500"> YK</label></li>
                    <li><input type="checkbox"/><label className="text-sm text-gray-500"> Pepe Jeans</label></li>
                    <li><input type="checkbox"/><label className="text-sm text-gray-500"> Jack and Jones</label></li>
                </ul>

            </div>
            <div className="my-4">
            <hr className = ""></hr>
            <h3 className="font-bold">BRAND</h3>
            <br/>
                <ul>
                    <li><input type="checkbox"/><label className="text-sm text-gray-500"> Red</label></li>
                    <li><input type="checkbox"/><label className="text-sm text-gray-500"> White</label></li>
                    <li><input type="checkbox"/><label className="text-sm text-gray-500"> Yellow</label></li>
                    <li><input type="checkbox"/><label className="text-sm text-gray-500"> Green</label></li>
                    <li><input type="checkbox"/><label className="text-sm text-gray-500"> Blue</label></li>
                </ul>


            </div>
        </div>
    )
}
export default Sidebar;