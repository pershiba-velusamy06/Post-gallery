import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllPost = createAsyncThunk(`/getAllPosts`, async () => {
    return axios.get('https://jsonplaceholder.typicode.com//posts').then((response) => {

        return response
    })
        .catch((error) => error);
});

export { getAllPost };