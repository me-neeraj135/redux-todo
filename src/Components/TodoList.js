/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  isCompleted,
  filterCompleted,
  filterAll,
  filterIncomplete,
  removeTodo,
} from "../Redux/Acton/action";
function TodoList() {
  const todos = useSelector(state => state.todos.data);
  const dispatch = useDispatch();

  return (
    <div className="">
      <ul className=" bg-zinc-200">
        {todos.map((todo, index) => {
          return (
            <li
              key={todo.id}
              className="flex justify-between p-2 border-b border-zinc-500  group "
            >
              <div className="flex items-center  w-4/5">
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={e => dispatch(isCompleted(index))}
                  className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <span
                  className={`${
                    todo.isCompleted && `line-through`
                  }  ml-4 break-all text-2xl`}
                >
                  {todo.content}
                </span>
              </div>
              <span
                onClick={e => dispatch(removeTodo(todo.id))}
                className="invisible flex items-center justify-center rounded-full p-3 w-4 h-4 border-solid border border-slate-500 text-xs  group-hover:visible cursor-pointer"
              >
                ❌
              </span>
            </li>
          );
        })}
      </ul>

      {/* <div className="flex justify-around py-4">
        <button
          className=" flex-auto  bg-blue-500 hover:bg-sky-700  text-white p-2 text-2xl rounded-full"
          onClick={() => dispatch(filterAll())}
        >
          {" "}
          all
        </button>
        <button
          className=" flex-auto  bg-blue-500 hover:bg-sky-700  text-white p-2 text-2xl mx-1 rounded-full"
          onClick={() => dispatch(filterCompleted())}
        >
          completed
        </button>
        <button
          className=" flex-auto  bg-blue-500 hover:bg-sky-700  text-white p-2 text-2xl  rounded-full"
          onClick={() => dispatch(filterIncomplete())}
        >
          incomplete
        </button>
      </div> */}
      <div className="p-4 bg-zinc-700"></div>
    </div>
  );
}

export default TodoList;
