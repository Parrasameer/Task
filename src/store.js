import { configureStore } from '@reduxjs/toolkit';
import todoReducers from '../src/ToDoReducers';


export const store = configureStore({
    reducer: {
        todo: todoReducers
    },
});
