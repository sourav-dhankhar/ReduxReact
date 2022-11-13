import { configureStore } from '@reduxjs/toolkit';
import authReducers from './authSlice';
import counterReducers from './counterSlice';


const store = configureStore({
    reducer: {counter: counterReducers, auth: authReducers}
})


export default store;
