import { createSlice } from "@reduxjs/toolkit";
import { CREATE_NEW_POST } from "../reducerConstants";
import { CreatePost, updatePost } from "../api/fetchEmployeApi";



export const initialState = {
    isLoading: false,
    PostDetail: {
        title: '',
        body: '',
        userId: 1
    },
    Title: "",
    Description: "",
    postId: "",
    isEdit: false
};

const createPostSlice = createSlice({
    name: CREATE_NEW_POST,
    initialState,
    reducers: {

        setTitle: (state, { payload }) => {
            state.Title = payload;
            state.PostDetail.title = payload;
        },
        setDescription: (state, { payload }) => {
            state.Description = payload;
            state.PostDetail.body = payload;
        },
        setEditData: (state, { payload }) => {
            state.isEdit = true
            state.PostDetail = payload;
            state.Title = payload.title;
            state.Description = payload.body;
            state.postId = payload.id
        },
        reset: () => { },
    },
    extraReducers: (builder) => {
        builder.addCase(CreatePost.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(CreatePost.fulfilled, (state, { payload }) => {
            if (payload?.status === 201) {

                state.PostDetail = {
                    title: '',
                    body: '',
                    userId: 1
                };
                state.Title = "";
                state.Description = "";
            } else {
                state.PostDetail = {}
            }

            state.isLoading = false
        });
        builder.addCase(CreatePost.rejected, (state, { payload }) => {
            state.isLoading = false;
        });
        builder.addCase(updatePost.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updatePost.fulfilled, (state, { payload }) => {
            if (payload?.status === 200) {

                state.PostDetail = ""
                state.Title = "";
                state.Description = "";
                state.postId = ""
                state.isLoading = false
                state.isEdit = false
            }
        });
        builder.addCase(updatePost.rejected, (state, { payload }) => {
            state.isLoading = false;
        });
    },
});

export const createPostSliceActions = createPostSlice.actions;
export default createPostSlice.reducer;
