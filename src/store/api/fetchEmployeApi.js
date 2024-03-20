import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllPost = createAsyncThunk(`/getAllPosts`, async () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {

        return response
    })
        .catch((error) => error);
});



const CreatePost = createAsyncThunk(`/CreatePosts`, async (data) => {
    return axios.post('https://jsonplaceholder.typicode.com/posts', data).then((response) => {

        return response
    })
        .catch((error) => error);
});
const updatePost = createAsyncThunk(`/UpdatePosts`, async (data) => {

    return axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data).then((response) => {

        return response
    })
        .catch((error) => error);
});





export { getAllPost, CreatePost ,updatePost};