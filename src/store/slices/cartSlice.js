import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice ({
    name:"cart",
    initialState:{
        user:"Demo",
        updatedAt: new Date ().toLocaleString(),
        cartItems:[],
        total:0
        
    },
    reducers:{
      addItemToCart: (state,action)=>{
        const{product,quantity} = action.payload
        const productInCart = state.cartItems.find(item=>item.id===product.id)
        if (!productInCart){
            state.cartItems.push({...product,quantity})
        }else{
            productInCart.quantity+=1
        }
        state.updatedAt= new Date().toLocaleString();
        state.total = state.cartItems.reduce((acc,item)=> acc + item.price*item.quantity, 0)
      }
      
    }
})

export const {addItemToCart} = cartSlice.actions

export default cartSlice.reducer