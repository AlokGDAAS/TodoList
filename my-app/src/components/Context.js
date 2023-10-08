import React, { useContext, useEffect, useReducer, useState } from 'react';
import reducer from './reducer';
import axios from 'axios'


const initialState = {
	cartItems: [],
	amount: 0,
	total: 0,
	isLoading: true,
};

const AppContext = React.createContext();


const API = "https://course-api.com/react-useReducer-cart-project";

const AppProvider =({children})=>{

    const [state , dispatch] = useReducer(reducer , initialState)
  

    const getApiData = async (url) => {
        try {
          const res = await fetch(url);
          const data = await res.json();         

          dispatch({type:"SET_STATE",
                     payload:{
                      items:data
                     }});
                     
        } catch (error) {
          console.log(error);
        }
      };

      

      // const clearCart=()=> {
      //   state.cartItems = [];
      // };


      const deleteItem =(id) =>{
          dispatch({type:"REMOVE_ITEM",
                     payload:id})
        // state.cartItems = state.cartItems.filter(
        //   (item) => item.id !== id
        // );
      };


      const increase=(id)=> {
        dispatch({type:"INCREASE",
                  payload:id})
       
      };


      const decrease=(id) =>{
        dispatch({type:"DECREASE",
                  payload:id})
      
      };

      const clear =()=>{
        dispatch({type:"CLEAR"})
      }


 

     








      
    
      useEffect(() => {
        getApiData(API);
        
      },[]);

     

      
      return(

        <AppContext.Provider value={{...state,deleteItem,increase,decrease,clear}}>
            {children}
        </AppContext.Provider>

    )



};

const useGlobalContext = ()=>{
    return(useContext(AppContext))
}
 
export {AppProvider,useGlobalContext}