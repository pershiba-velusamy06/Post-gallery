import { createSlice } from "@reduxjs/toolkit";
import { CREATE_NEW_POST } from "../reducerConstants";



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
        setLoading: (state) => {
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
 
});

export const createPostSliceActions = createPostSlice.actions;
export default createPostSlice.reducer;
