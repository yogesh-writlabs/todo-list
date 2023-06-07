import "./App.css";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [newData, setNewData] = useState([]);

  // closure started
  // function outerFunction() {
  //   var outerVariable = "I am from the outer function";

  //   function innerFunction() {
  //     console.log(outerVariable);
  //   }

  //   return innerFunction;
  // }

  // var closure = outerFunction(); // Assigning the returned inner function to a variable

  // closure();
  // closure ended

  // console.log(a, "a");
  // console.log(b, "b");
  // console.log(c, "c");

  // const a = 2;
  // let b = 3;
  // var c = 4;

  const handleTodo = () => {
    if (data.trim() === "") {
      alert("enter todo");
    } else {
      setNewData([...newData, data]);
      setData("");
    }
  };

  const handleDelete = (i) => {
    const updatedData = [...newData];
    updatedData.splice(i, 1);
    setNewData(updatedData);
  };
  return (
    <div className="App">
      <input
        value={data}
        onChange={(e) => setData(e.target.value)}
        type="text"
      />
      <button onClick={handleTodo}>Add</button>
      <div>
        {newData.map((todo, id) => {
          return (
            <div>
              <li key={todo.id}>
                {todo}
                <button onClick={() => handleDelete(id)}>Delete</button>
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
