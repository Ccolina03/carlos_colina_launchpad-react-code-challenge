import {configureStore} from '@reduxjs/toolkit';

import postsReducer from './../store/GetPostsSlice';

export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})
