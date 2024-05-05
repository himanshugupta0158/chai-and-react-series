import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { removeTodo, setUpdateValue, updating, isTodoCompleted } from "../features/todo/todoSlice"

const Todos = () => {

    const todos = useSelector(state => state.todos)
    const todo_update = useSelector(state => state.todo_update)
    const dispatch = useDispatch()

    const update = (todo) => {
        dispatch(updating({ id: todo.id }))
        dispatch(setUpdateValue(todo))
    }

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        <div className={`text-white ${todo.isComplete ? "line-through" : ""}`}>{todo.text}</div>
                        <div className='space-x-4'>

                            <button
                                onClick={() => update(todo)}
                                className={`text-white py-1 px-4 focus:outline-none rounded text-md ${todo_update.is_updating && todo_update.id === todo.id ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
                                    }`}
                            >
                                {todo_update.is_updating && todo_update.id === todo.id ? "Cancel" : "Update"}
                            </button>

                            <button
                                onClick={() => dispatch(removeTodo({ id: todo.id }))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => dispatch(isTodoCompleted({ id: todo.id }))}
                                className={`text-white ${todo.isComplete ? "bg-green-700 hover:bg-green-800" : "bg-blue-500 hover:bg-blue-600"} border-0 py-1 px-4 focus:outline-none  rounded text-md`}
                            >
                                {todo.isComplete ? "Mark Incomplete" : "Mark Complete"}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos