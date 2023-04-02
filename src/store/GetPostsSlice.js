import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20';

const INITIAL_POSTS_STATE = {
  posts: [],
  status: 'idle', // could be idle, loading, succeeded, or failed
  error: null,
};

// getting data from API
export const fetchPosts = createAsyncThunk(
  'carlos_colina_launchpad-react-code-challenge',
  async () => {
    const response = await axios.get(POSTS_URL);
    return response.data;
  }
);

const getPostsSlice = createSlice({
  name: 'posts',
  initialState: INITIAL_POSTS_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const loadedPosts = action.payload.map((post) => post);
        state.posts = state.posts.concat(loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state, action)=> {
        state.status='failed'
        state.error = action.error.message
      })
  },
});

export const selectAllPost = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export default getPostsSlice.reducer





