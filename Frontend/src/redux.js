import { configureStore, createSlice } from "@reduxjs/toolkit";

export const signinSlice = createSlice({
    name: 'signin',
    initialState: {
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
            state.error = null;
        },
        signinFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        storeUserProfile: (state, action) => {
            state.user = action.payload;
        },
    },
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        usersSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        usersFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { signinRequest, signinSuccess, signinFailure, storeUserProfile } = signinSlice.actions;
export const { usersSuccess, usersFailure } = userSlice.actions;

export const store = configureStore({
    reducer: {
        signin: signinSlice.reducer,
        users: userSlice.reducer,
    }
})