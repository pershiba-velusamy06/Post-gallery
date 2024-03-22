import { createSlice } from "@reduxjs/toolkit";
import { FETCH_ALL_POST } from "../reducerConstants";
import { getAllPost } from "../api/fetchEmployeApi";
import { findIdForPost } from "../helpers/fetchPostHelper";


export const initialState = {
    isLoading: false,
    AllPostList: [],
    isDeleteLoading: false,
    deleteId: "",
    isCreateLoading:""
};

const fetchPostSlice = createSlice({
    name: FETCH_ALL_POST,
    initialState,
    reducers: {
        addPostToExsisting: (state, { payload }) => {
            state.AllPostList.push(payload);
            state.isCreateLoading=payload.id
        },
        updatePost: (state, { payload }) => {
            let index = findIdForPost(state,payload)
            if (index > -1) {
                state.AllPostList[index] = payload;
                state.isCreateLoading=payload.id
            }
        },
        deleteLoading: (state, { payload }) => {
            state.isDeleteLoading = !state.isDeleteLoading;
            state.deleteId = payload
        },
        createLoading: (state) => {
            state.isCreateLoading = "";
            
        },
        deletePost: (state, { payload }) => {
            let index = findIdForPost(state,payload)
            if (index > -1) {
                state.AllPostList.splice(index, 1);
                state.isDeleteLoading = false
                state.deleteId = ""
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
