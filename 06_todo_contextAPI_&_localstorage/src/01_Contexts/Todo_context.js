import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todo: [
        {
            id: 1,
            todo: "Todo message",
            checked: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider