import { createSlice } from "@reduxjs/toolkit";
import productCategories from "../../data/productCategories.json"
import products from "../../data/products.json"


const shopSlice = createSlice ({
    name:"shop",
    initialState:{
        productCategories,
        products,
        selectedCategory:"",
        selectedProduct:{}
    },
    reducers:{
        setSelectedCategory:(state,action)=>{
            state.selectedCategory = action.payload
        },
        setSelectedProduct:(state,action)=>{
            state.selectedProduct =action.payload
        }
    }
})

export const {setSelectedCategory, setSelectedProduct} = shopSlice.actions

export default shopSlice.reducer