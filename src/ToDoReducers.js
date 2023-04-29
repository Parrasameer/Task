import { createSlice } from "@reduxjs/toolkit"


// this is the intial state of data
const initialState = {
    value: []
}


// creating a slice which manages actions  for reducers.
const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)


        },
        update: (state, action) => {

            const { index, name, mobile, email } = action.payload;
            state.value[index].name = name;
            state.value[index].mobile = mobile;
        },
        del: (state, action) => {


            const index = action.payload.index;
            state.value.splice(index, 1);




        }


    }


});
// a gate way for listenig to data.
export const todo = (state) => state.todo.value

export const { add, update, del } = todoSlice.actions;
export default todoSlice.reducer;