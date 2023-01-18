/** @format */

export const addTodo = content => {
  return {
    type: `ADD_TODO`,
    payload: {
      id: Math.floor(Date.now()),
      isCompleted: false,
      content,
    },
  };
};

export const removeTodo = id => {
  return {
    type: "REMOVE_TODO",
    id,
  };
};

export const isCompleted = index => {
  return {
    type: "IS_COMPLETED",
    index,
  };
};

export const filterAll = () => {
  return {
    type: "FILTER_ALL",
  };
};
export const filterCompleted = () => {
  return {
    type: "FILTER_COMPLETED",
  };
};

export const filterIncomplete = () => {
  return {
    type: "FILTER_INCOMPLETE",
  };
};
