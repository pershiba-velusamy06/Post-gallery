import { createSlice } from "@reduxjs/toolkit";
import { FETCH_ALL_EMPLOYEE } from "../reducerConstants";
import { getAllUsers } from "../api/fetchEmployeApi";


export const initialState = {
    isLoading: false,
    AllEmployeeList: []
};

const fetchEmployeeSlice = createSlice({
    name: FETCH_ALL_EMPLOYEE,
    initialState,
    reducers: {
     

        reset: () => { },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
            if (payload?.status === 200) {
                
                state.AllEmployeeList = payload?.data
            } else {
                state.AllEmployeeList = []
            }

            state.isLoading = false
        });
        builder.addCase(getAllUsers.rejected, (state, { payload }) => {
            state.isLoading = false;
        });
    },
});

export const fetchEmployeeSliceActions = fetchEmployeeSlice.actions;
export default fetchEmployeeSlice.reducer;
