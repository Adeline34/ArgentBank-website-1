import { configureStore, createSlice } from "@reduxjs/toolkit";

export const signinSlice = createSlice({
    name: 'signin',
    initialState:{
       user: null,
       loading: false,
       error: null,
    },

    reducers: {
        signinRequest: state => {
            state.loading = true;
            state.error = null;
        },
        signinSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        signinFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { signinRequest, signinSuccess, signinFailure } = signinSlice.actions;


export const store = configureStore({
    reducer: {
        signin: signinSlice.reducer 
    }
})