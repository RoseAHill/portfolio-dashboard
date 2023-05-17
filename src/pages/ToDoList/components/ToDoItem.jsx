import {
  AiFillCheckSquare,
  AiTwotoneCheckSquare,
  AiOutlineDelete,
} from "react-icons/ai";

const ToDoItem = ({ todoObject, toDoCheckOff, toDoDelete }) => {
  return (
    <div
      onClick={() => toDoCheckOff(todoObject)}
      className={
        "todo-item w-11/12 flex h-min justify-between items-center p-4 m-2 cursor-pointer group" +
        (todoObject.completed
          ? " bg-slate-800 hover:bg-slate-700"
          : " bg-slate-700 hover:bg-slate-600")
      }
    >
      <p
        className={`flex flex-wrap max-w-lg ${
          todoObject.completed && "line-through text-green-500"
        }`}
      >
        {todoObject.title}
      </p>
      <p className="flex child:text-3xl">
        <AiOutlineDelete
          className="hidden z-10 group-hover:flex hover:text-red-600"
          onClick={(e) => {
            return toDoDelete(e, todoObject);
          }}
        />
        {todoObject.completed ? (
          <AiFillCheckSquare />
        ) : (
          <AiTwotoneCheckSquare />
        )}
      </p>
    </div>
  );
};

export default ToDoItem;
