/** @format */

const initialState = [];

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case `filterCompleted`:
      return state.filter(todo => todo.isCompleted);

    case `filterAll`:
      return state;

    case `filterIncomplete`:
      return state.filter(todo => !todo.isCompleted);

    default:
      return state;
  }
};

export default filterReducer;
