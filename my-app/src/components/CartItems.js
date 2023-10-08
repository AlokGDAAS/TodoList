import React, { useEffect, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import {  useGlobalContext } from "./Context";

export default function CartItem() {
  const { cartItems, deleteItem,increase,decrease } = useGlobalContext();
 




  

  return (
    <div>

		{cartItems.map((e=>{

			const {id,title,price,img,amount}=e;
     

			return (

				<div className="cart-item" key={id}>
        <img src={img} alt={title} />
        <div>
          <h4>{title}</h4>
          <h4 className="item-price">$ {price}</h4>
          <button onClick={() => deleteItem(id)} className="remove-btn">remove</button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button onClick={() =>increase(id)} className="amount-btn m-1">
            <FaChevronUp />
          </button>
          <p className="amount m-1">{amount}</p>
          <button onClick={() => decrease(id)} className="amount-btn m-1">
            <FaChevronDown />
          </button>
        </div>
      </div>

			)
		}))}
      
    </div>
  );
}
