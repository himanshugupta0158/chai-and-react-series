import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updating, updateTodo, setUpdateValue } from '../features/todo/todoSlice'

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch()
    const todo_update = useSelector(state => state.todo_update);

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("")
    }

    const todoUpdate = (e) => {
        e.preventDefault();
        dispatch(updating({ id: todo_update.id }))
        dispatch(setUpdateValue({ id: todo_update.id, text: input }))
        dispatch(updateTodo({ id: todo_update.id, text: input }))
    }

    useEffect(() => {
        if (todo_update.is_updating) {
            setInput(todo_update.text)
        }
        else {
            setInput("")
        }
    }, [todo_update])

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            {todo_update.is_updating ? (
                <button
                    onClick={todoUpdate}
                    className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                >
                    Update Todo
                </button>
            ) : (
                <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                    Add Todo
                </button>
            )}
        </form>
    )
}

export default AddTodo