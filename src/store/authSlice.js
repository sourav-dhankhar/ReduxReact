import { createSlice } from "@reduxjs/toolkit"


const authSlice = createSlice({
    'name': 'auth',
    initialState: {isAuthorised: false},
    reducers: {
        isLoggedIn: (state) => {
            state.isAuthorised = !state.isAuthorised
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;