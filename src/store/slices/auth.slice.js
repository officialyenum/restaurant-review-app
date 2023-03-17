import { createSlice } from "@reduxjs/toolkit";

//init auth Slice
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: null
    },
    reducers: {
        authenticateUser(state, action){
            // console.log("Document payload:", action.payload);
            state.currentUser = {
                id: action.payload.id,
                fullName: action.payload.fullName,
                username: action.payload.username,
                email: action.payload.email,
                timeStamp: action.payload.timeStamp
            }
        },
        logoutUser(state){
            state.currentUser = null
        }
    }
});

// Export Auth Slice Actions 
export const authActions = authSlice.actions;
// Export Auth Slice
export default authSlice;