import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({handleAddTodo}) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  //Manda el evento de enviar del formulario al componente padre
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

    handleAddTodo(newTodo);
    reset();
}


  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="description"
          placeholder="aprender..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        ></input>
        <button
          type="submit"
          className="btn btn-outline-primary mt-1 btn-block"
        >
          Agregar
        </button>
      </form>
    </>
  );
};
