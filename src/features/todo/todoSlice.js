import { createSlice, nanoid } from '@reduxjs/toolkit' // step no 2 
// nanoid creates unique id 

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        mainTodo: [{ id: 1, text: "hello world" }]
    },
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload  // jdi kichu data pass hoy then seta action er mddhe jay 
            }
            state.mainTodo.push(todo) // state er mddhe current state pass hoy 
        },
        removeTodo: (state , action) => {
            state.mainTodo = state.mainTodo.filter((todo)=>{
               return todo.id !== action.payload;
            })
         },
    }
})


export const  {addTodo , removeTodo} = todoSlice.actions // todoSlice er bhitar theke addTodo and removeTodo ke export korbe


export default todoSlice.reducer // this must be done to export all the reducers 