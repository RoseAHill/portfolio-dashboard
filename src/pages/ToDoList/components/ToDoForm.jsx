import { AiOutlineEnter } from "react-icons/ai";

const ToDoForm = ({ setTextInput, textInput, addToDo, setFilterBy, filterBy}) => {
  const updateTextInput = (e) => {
    setTextInput(e.target.value)
  }

  const addToDoItem = (e) => {
    e.preventDefault()
    if (textInput.length > 0) {
      addToDo(textInput)
      setTextInput("")
    };
  }

  const changeFilterType = (e) => {
    setFilterBy(e.target.value)
  }

  return (
    <form className="flex min-h-[3rem] py-6 items-center grandchild:transition-all grandchild:duration-200 grandchild:ease-linear grandchild:p-4 grandchild:h-auto grandchild:bg-slate-700">
      <div className="text-form flex px-2 group">
        <input
          onChange={updateTextInput}
          value={textInput}
          type="text"
          name="todo-input"
          id="todo-input"
          placeholder="ToDo Title"
          className="rounded-l-lg group-hover:rounded-none"
        />
        <button
          type="submit"
          onClick={addToDoItem}
          className="!bg-slate-800 text-green-500 hover:bg-green-600 hover:text-white rounded-r-lg group-hover:rounded-none"
        >
          <AiOutlineEnter />
        </button>
      </div>
      <div className="sort-form">
        <select
          defaultValue={filterBy}
          name="sort-filter"
          id="sort-filter"
          onChange={changeFilterType}
          className="bg-slate-700 rounded-lg hover:rounded-none origin-top"
        >
          <option disabled value="default">
            Sort by
          </option>
          <option value="all">All</option>
          <option value="uncompleted">Uncompleted</option>
          <option value="completed">Complete</option>
        </select>
      </div>
    </form>
  );
};

export default ToDoForm;
