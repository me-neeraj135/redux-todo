/** @format */

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../Redux/Acton/action";

function AddTodo() {
  // let state = useSelector(state => console.log(state, `todo`));
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();

    const content = e.target[0].value;

    if (content !== ``) {
      dispatch(addTodo(content));
    }
    e.target[0].value = ``;
  };
  return (
    <div className="border-solid border-2w-full p-5 bg-zinc-200 w-full">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap justify-center  w-full "
      >
        <input
          type="text"
          className="border-solid border-2 p-2 text-2xl h-full  flex-auto  outline-none "
          placeholder="add todo..."
        />
        <button
          type="submit"
          className="rounded-none bg-blue-500 hover:bg-sky-700  text-white p-2 text-2xl h-full flex-auto "
        >
          add todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
