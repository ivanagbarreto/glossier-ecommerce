import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rtbdBaseURL = process.env.EXPO_PUBLIC_RTDB_URL

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery ({ baseUrl: rtbdBaseURL }),
    endpoints:(builder)=>({
        getCategories:builder.query({query:()=> "categories.json"}),
    })

})
export const { useGetCategoriesQuery } = shopApi