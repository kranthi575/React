import constants from '../utils/constants'
const CartItem=({cartItem})=>{

    console.log("CartItem");
    console.log(cartItem);
    var {name,quantity,price}=cartItem;
    price==null?price=139:price=price/100;
    const cloudinaryImageId=cartItem.imageId;
    const imgurl=swiggyRestaurantImgURL+cloudinaryImageId;
    var totalPriceOfItem=price*quantity;
    const foodType=cartItem?.itemAttribute?.vegClassifier;
return<>
<div className="flex flex-row item-center">
    <div className="border border-b-1 rounded-lg border-gray-200 w-[450px] h-auto"> 
       <h1 className='font-bold'>{name}</h1>
       <p className='font text-gray-600 '>{foodType}</p>
       <p>Quantity: {quantity}</p>
       <p>Each cost: ₹{price}</p>
       <p>Total: ₹{totalPriceOfItem}</p>
    </div>
    <div>
    <img alt="Image not found" className=" mt-0 rounded-lg h-[180px] w-[180px] border border-black" src={imgurl}></img>
            
    </div>
</div>
</>
}
export default CartItem;