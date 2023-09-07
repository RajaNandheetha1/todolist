import React,{useState} from "react";

const TodoList = () => {
  const [todo,setTodo] = useState([]);
  const [newTodo,setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodo([...todo,{text:newTodo.trim(), checked: false}]);
      setNewTodo("");
    }
  }
  const handleDeleteTodo = (index) => {
    const newTodo =[...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };
  const handleToggleTodo = (index) => {
    const newTodo =[...todo];
    newTodo[index].checked = !newTodo[index].checked
    setTodo(newTodo);
  };
  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todo.map((todo, index) => (
          <li key={index} style={{ display: "flex"}}>
            <div style={{dispay: "flex",alignItems: "center"}}>
              <input 
                type="checkbox" 
                checked={todo.checked} 
                onChange={() =>handleToggleTodo(index)}
              />
              <span 
                style={{
                  marginRight:"10px",
                  textDecoration: todo.checked?"line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button style={{ marginTop: "5px",marginBottom: "5px" }}
              onClick={() => handleDeleteTodo(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
       </ul>
    </div>
  );
};

export default TodoList;

