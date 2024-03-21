import { createSlice } from "@reduxjs/toolkit";
import { CREATE_NEW_POST } from "../reducerConstants";
import { CreatePost, updatePost } from "../api/fetchEmployeApi";



export const initialState = {
    isdataLoading: false,
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
        setLoading: (state, { payload }) => {
            state.isdataLoading= !state.isdataLoading
        },
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
            state.isdataLoading = true;
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

            state.isdataLoading = false
        });
        builder.addCase(CreatePost.rejected, (state, { payload }) => {
            state.isdataLoading = false;
        });
        builder.addCase(updatePost.pending, (state) => {
            state.isdataLoading = true;
        });
        builder.addCase(updatePost.fulfilled, (state, { payload }) => {
            if (payload?.status === 200) {


                state.PostDetail = {
                    title: '',
                    body: '',
                    userId: 1
                };
                state.Title = "";
                state.Description = "";
                state.postId = ""
                state.isdataLoading = false
                state.isEdit = false
            }
        });
        builder.addCase(updatePost.rejected, (state, { payload }) => {
            state.isdataLoading = false;
        });
    },
});

export const createPostSliceActions = createPostSlice.actions;
export default createPostSlice.reducer;
