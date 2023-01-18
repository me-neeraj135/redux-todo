/** @format */

const initialState = {
  data: [],
};

const todoReducer = (state = initialState, action) => {
  // console.log(action, state, `rd`);
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case "REMOVE_TODO":
      return {
        ...state,
        data: [...state.data.filter(todo => todo.id !== action.id)],
      };

    case "IS_COMPLETED":
      state.data[action.index].isCompleted =
        !state.data[action.index].isCompleted;
      return {
        ...state,
        data: [...state.data],
      };

    case `FILTER_ALL`:
      return state;

      // case "FILTER_COMPLETED":
      //   return {
      //     ...state,

      //     data: [...state.data.filter(todo => todo.isCompleted === true)],
      //   };

      // case "FILTER_INCOMPLETE":
      return {
        ...state,
        data: [...state.data.filter(todo => todo.isCompleted === false)],
      };

    default:
      return state;
  }
};

export default todoReducer;
