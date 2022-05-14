import React, {useContext} from "react";
import { AddCart } from "../Global/AddCart";
import Product from "./Product";
const Carts = () => {
   const {shoppingCart, totalAmount, quantity, dispatch} = useContext(AddCart)
   console.log(shoppingCart)
    return (
        <div className="cart-container">
            <div className="cartDetails">
              {shoppingCart.length > 0 ? 
              shoppingCart.map(mainCart =>(
                <div className="cart" key={mainCart.id}>
                    <span className="productImage"><img src={mainCart.image}/></span>
                    <span className="productsNames">{mainCart.name}</span>
                    <span className="productPrice">${mainCart.Price}.00</span>
                    <span className="increment" onClick={()=> dispatch({type:'INCREMENT', id: mainCart.id, mainCart })}><i className="fa-solid fa-plus"></i></span>
                    <span className="productQunatity">{mainCart.quantity}</span>
                    <span className="decrement" onClick={()=> dispatch({type:'DECREMENT', id: mainCart.id, mainCart })}><i className="fa-solid fa-minus"></i></span>
                    <span className="productTotalamount">${mainCart.Price * mainCart.quantity}.00</span>
                    <span className="delete"  onClick={()=> dispatch({type:'DELETE', id: mainCart.id, mainCart })}><i class="fa-solid fa-trash-can"></i></span>


                    
                </div>
              ))
               : "sorry your cart is currently empty"}
            </div>
        </div>
    )
}
export default Carts;