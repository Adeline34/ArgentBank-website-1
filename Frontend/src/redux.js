import { configureStore, createSlice } from "@reduxjs/toolkit"

export const signinSlice = createSlice({
  name: "signin",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },

  reducers: {
    signinRequest: state => {
      state.loading = true
      state.error = null
    },
    userSuccess: (state, action) => {
      state.loading = false
      state.user = action.payload
      state.error = null
    },
    userFailure: (state, action) => {
      state.loading = false
      state.user = null
      state.error = action.payload
    },
    userLogout: state => {
      state.loading = false
      state.user = null
      state.error = null
      sessionStorage.removeItem("token")
    },
    userError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const {
  userSuccess,
  userFailure,
  userLogout,
  userError,
  signinRequest,
} = signinSlice.actions

export const store = configureStore({
  reducer: {
    signin: signinSlice.reducer,
  },
})
