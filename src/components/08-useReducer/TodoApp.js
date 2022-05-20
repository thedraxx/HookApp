import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm'
import './Styles.css'
import { todoReducer } from './todoReducer'

const init = () => {
    //Si los datos existen en el localstorage traelos y sino returna un arreglo vacio
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);
    const [{ description }, handleInputChange, reset] = useForm({
        description: ""
    });

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

    //Agrega TODO
    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: true,
        }
        const action = {
            type: "ADD_TODO",
            payload: newTodo
        }
        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1>Hola Mundo ({todos.length})</h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => (
                                <li key={todo.id} className="list-group-item">

                                    <p className={`${todo.done && 'complete'}`}
                                        onClick={() => handleToggle(todo.id)}
                                    >
                                        {i + 1}  {todo.desc}
                                    </p>
                                    <button className='btn btn-danger' onClick={() => handleDelete(todo.id)} >
                                        Borrar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>

                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            placeholder='aprender...'
                            autoComplete='off'
                            value={description}
                            onChange={handleInputChange}>
                        </input>

                        <button
                            type='submit'
                            className='btn btn-outline-primary mt-1 btn-block'>
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}
