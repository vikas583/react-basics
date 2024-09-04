import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    initialState,
    name: "auth",
    reducers: {
        login: (state, action) => {
            state.status = true
            state.userData = action.payload.userData
        },
        logout: (state) => {
            state.status = false
            state.userData = null
        }
    }
})

export default authSlice.reducer

export const { login, logout } = authSlice.actions