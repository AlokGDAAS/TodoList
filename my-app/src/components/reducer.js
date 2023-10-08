import React from 'react'

function reducer(state,action) {
    switch(action.type){

        case "SET_STATE":
            return{
                ...state,
                cartItems:action.payload.items           
            }

            case "REMOVE_ITEM":
                return{
                    ...state,
                    cartItems:state.cartItems.filter((e)=> e.id !== action.payload)
                }

            case "INCREASE":

            state.cartItems.find(
                (item) =>{ if(item.id === action.payload){

                  item.amount += 1/2;

                  if(item.amount <=0){
                    item.amount = 0
                }

                }})
            

            return{
                ...state,
               
                
            }

            case "DECREASE":
            state.cartItems.find(
                      (item) =>{ if(item.id === action.payload){

                        item.amount-= 1/2;

                        if(item.amount <=0){
                            item.amount = 0
                        }

                      }})
                  
  
                  return{
                      ...state,
                     
                      
                  }

                  case "CLEAR":
                    return{
                        ...state,
                        cartItems:[]
                    }

                  

    }
  return (state )
}

export default reducer