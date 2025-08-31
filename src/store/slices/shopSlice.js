import { createSlice } from "@reduxjs/toolkit";
import productCategories from "../../data/productCategories.json"
import products from "../../data/products.json"


const shopSlice = createSlice ({
    name:"shop",
    initialState:{
        productCategories,
        products,
        selectedCategory:""
    },
    reducers:{
        setSelectedCategory:(state,action)=>{
            state.selectedCategory = action.payload
        }
    }
})

export const {setSelectedCategory} = shopSlice.actions

export default shopSlice.reducer