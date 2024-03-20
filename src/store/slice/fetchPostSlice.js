import { createSlice } from "@reduxjs/toolkit";
import { FETCH_ALL_POST } from "../reducerConstants";
import { getAllPost } from "../api/fetchEmployeApi";


export const initialState = {
    isLoading: false,
    AllPostList: []
};

const fetchPostSlice = createSlice({
    name: FETCH_ALL_POST,
    initialState,
    reducers: {
        addPostToExsisting: (state, { payload }) => {
            state.AllPostList.push(payload);
        },
        updatePost: (state, { payload }) => {
            let index = state.AllPostList.findIndex((post) => { return post.id === payload.id })
            if(index>-1){
                state.AllPostList[index]=payload;
            }
        },

        reset: () => { },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllPost.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAllPost.fulfilled, (state, { payload }) => {
            if (payload?.status === 200) {

                state.AllPostList = payload?.data
            } else {
                state.AllPostList = []
            }

            state.isLoading = false
        });
        builder.addCase(getAllPost.rejected, (state, { payload }) => {
            state.isLoading = false;
        });
    },
});

export const fetchPostSliceActions = fetchPostSlice.actions;
export default fetchPostSlice.reducer;
