import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: "",
    password: "",
    createdAt: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthenticatedUser: (state, action) => {
            state.user = action.payload.user;
            state.password = action.payload.password;
            state.createdAt = new Date().toISOString();
        },
        removeAuthenticatedUser: (state) => {
            state.user = "";
            state.password = "";
            state.createdAt = "";
        },
    },
});

export const { setAuthenticatedUser, removeAuthenticatedUser } =
    userSlice.actions;

export default userSlice.reducer;
