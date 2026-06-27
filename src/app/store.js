import {configureStore} from "@reduxjs/toolkit";
import { postSlice } from "../features/posts/postsSlice";


export default configureStore({
    reducer:{
        posts:postSlice.reducer
    }
})