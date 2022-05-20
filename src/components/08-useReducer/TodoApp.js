import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './Styles.css';

const init = () => {
    //Si los datos existen en el localstorage traelos y sino returna un arreglo vacio
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);
 
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    //Elimina TODO
    const handleDelete = (todoId) => {
        const action = {
            type: 'REMOVE_TODO',
            payload: todoId
        }
        dispatch(action);
    }

    //Cambia Todo como hecha o no
    const handleToggle = (todoId) => {
        console.log('activado', todoId);
        const action = {
            type: 'TOGGLE_TODO',
            payload: todoId,
        }
        dispatch(action);
    }

    //Conectado en TODOADD
    const handleAddTodo = (newTodo) => {
        const action = {
            type: "ADD_TODO",
            payload: newTodo
        }

        dispatch(action);
    }

    return (
        <div>
            <h1>Hola Mundo ({todos.length})</h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    {/* TodoList, */}
                    <TodoList
                        todos={todos}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                </div>
                <div className='col-5'>
                   <TodoAdd handleAddTodo={handleAddTodo}/>
                </div>
            </div>
        </div>

    )
}
