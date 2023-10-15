import { useState } from "react";

function EditBar(props) {
  const [input, setInput] = useState(props.title || "");
  const [error, setError] = useState("");

  const handleClickSave = () => {
    //validate input
    if (input === "") {
      setError("Title is required");
    } else {
      setError("");
      if (props.title) {
        props.updateTodo(props.id, input);
        props.toggleEditing();
      } else {
        props.createTodo(input);
      }
      setInput("");
    }
  };
  const handleClickCancel = () => {
    if (props.toggleEditing) {
      props.toggleEditing();
    } else {
      setInput("");
    }
  };

  return (
    <>
      <div className="input-group">
        <input
          type="text"
          className={`form-control ${error ? "is-invalid" : ""}`}
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button className="btn btn-success" onClick={handleClickSave}>
          <i className="fa-solid fa-check" />
        </button>
        <button className="btn btn-secondary" onClick={handleClickCancel}>
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
      {error && <small className="text-danger">{error}</small>}
    </>
  );
}
export default EditBar;
