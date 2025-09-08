import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseRTDBURL = process.env.EXPO_PUBLIC_BASE_RTDB_URL;

console.log("RTDB_URL:", baseRTDBURL);
export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery ({ baseUrl: "https://fashion-ecommerce-faf28-default-rtdb.firebaseio.com/"  }),
    endpoints:(builder)=>({
        getCategories: builder.query({query:()=> 'categories.json'}),
        getProductsByCategory: builder.query({
            query:(category)=> `products.json?orderBy="category"&equalTo="${category}"`,transformResponse: (response) => {
            return Object.values(response)
        }})
        
    })

})
export const { useGetCategoriesQuery, useGetProductsByCategoryQuery } = shopApi