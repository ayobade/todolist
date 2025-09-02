import { useState } from "react";

function Form(props) {
    const [name, setName] = useState('');
    function handleSubmit(event) {
        event.preventDefault();
        const trimmed = name.trim();
        if (!trimmed) return;
        props.addTask(trimmed);
        setName("");
      }

function handleChange(event) {
    setName(event.target.value);
  }

    return (
<form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          required
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg" disabled={!name.trim()}>
          Add
        </button>
      </form>

    )

}

export default Form;