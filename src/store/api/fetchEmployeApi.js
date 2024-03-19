import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllUsers = createAsyncThunk(`/getAllEmployees`, async () => {
    return axios.get('https://jsonplaceholder.typicode.com//users').then((response) => {
        
        return response
    })
        .catch((error) => error);
});

export { getAllUsers };