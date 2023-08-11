import {configureStore} from "@reduxjs/toolkit"

import amazonReducer from "./createSlice"
export const  store = configureStore({
reducer : {
    amazon :amazonReducer ,
}
})