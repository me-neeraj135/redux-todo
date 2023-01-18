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

export const removeTodo = index => {
  return {
    type: `REMOVE_TODO`,
    index,
  };
};

export const isCompleted = index => {
  return {
    type: `isCompleted`,
    index,
  };
};

export const filterCompleted = () => {
  return {
    type: `filterCompleted`,
  };
};

export const filterAll = () => {
  return {
    type: `filterAll`,
  };
};

export const filterIncomplete = () => {
  return {
    type: `filterIncomplete`,
  };
};
