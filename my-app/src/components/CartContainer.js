import React, { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import {  useGlobalContext } from "./Context";
import CartItem from "./CartItems";


export default function CartContainer() {
	
	const { cartItems, amount,clear } = useGlobalContext();
	
	

	// if (amount < 1) {
	// 	return (
	// 		<section className="cart">
	// 			<header>
	// 				<h2>your bag</h2>
	// 				<h4 className="empty-cart">is currently empty</h4>
	// 			</header>
	// 		</section>
	// 	);
	// }

	const calculateTotal =()=>{

		let total =0;
	
		for(let i= 0 ; i < cartItems.length; i++){
			total += cartItems[i].price * cartItems[i].amount;
		  
		} 
	
		return(Math.floor(total) )
	}

	return (
		<section className="cart">
			<header>
				<h2>your bag</h2>
			</header>
			<CartItem/>
			<footer>
				<hr />
				<div className="cart-total">
					<h4>
						total <span>$ {calculateTotal()}</span>
					</h4>
				</div>

				<button onClick={()=>clear()}className="btn clear-btn">clear cart</button>
			</footer>
		</section>
	);
}