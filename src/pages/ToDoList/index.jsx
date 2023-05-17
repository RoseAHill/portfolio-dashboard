import { useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import ToDoForm from "./components/ToDoForm"
import ToDoItem from "./components/ToDoItem"

const ToDoList = () => {
  const [toDos, setToDos] = useState(
    JSON.parse(localStorage.getItem("toDos")) || []
  );
  const [textInput, setTextInput] = useState("");
  const [filterBy, setFilterBy] = useState(
    localStorage.getItem("filterState") || "all"
  );

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  useEffect(() => {
    localStorage.setItem("filterState", filterBy);
  }, [filterBy]);

  const addToDo = (todoName) => {
    setToDos([...toDos, { title: todoName, completed: false, id: uuidv1() }]);
  };

  const toDoCheckOff = (todoObject) => {
    let toDosCopy = [...toDos];
    let toCheckIdx = toDosCopy.findIndex((todo) => todoObject.id == todo.id);
    toDosCopy[toCheckIdx] = {
      title: todoObject.title,
      completed: !todoObject.completed,
      id: todoObject.id,
    };
    setToDos([...toDosCopy]);
  };

  const toDoDelete = (e, todoObject) => {
    e.stopPropagation()
    let toDosCopy = [...toDos]
    let toDeleteIdx = toDosCopy.findIndex((todo) => todoObject.id == todo.id)
    toDosCopy.splice(toDeleteIdx, 1)
    setToDos(toDosCopy)
  }

  const sortedToDos = () => {
    let sorted = [...toDos];
    if (filterBy !== "all")
      sorted = sorted.sort((todo1, todo2) =>
        filterBy == "uncompleted"
          ? todo1.completed - todo2.completed
          : todo2.completed - todo1.completed
      );
    return sorted;
  };

  return (
    <div className="App font-sans text-xl tracking-wide h-full flex place-items-center place-content-center">
      <div className="card bg-gray-900 flex flex-col justify-around p-6 place-content-center max-h-[80%]">
        <h1 className="text-center text-3xl font-bold text-green-400">
          Rosie's ToDo List
        </h1>
        <ToDoForm
          setTextInput={setTextInput}
          textInput={textInput}
          addToDo={addToDo}
          setFilterBy={setFilterBy}
          filterBy={filterBy}
        />
        <div className="todo-list flex flex-col place-items-center min-h-[40vh] overflow-auto overflow-x-hidden">
          {toDos.length > 0
            ? sortedToDos().map((todo) => (
                <ToDoItem
                  toDoCheckOff={toDoCheckOff}
                  toDoDelete={toDoDelete}
                  key={todo.id}
                  todoObject={todo}
                />
              ))
            : "No todos yet"}
        </div>
      </div>
    </div>
  );
}

export default ToDoList