/** @format */

const initialState = [];

const todoReducer = (state = initialState, action) => {
  console.log(action, state);
  switch (action.type) {
    case `ADD_TODO`:
      return [...state, action.payload];

    case `REMOVE_TODO`:
      state.splice(action.index, 1);
      return [...state];

    case `isCompleted`:
      state[action.index].isCompleted = !state[action.index].isCompleted;
      return [...state];

    case `filterCompleted`:
      console.log(state.filter(todo => todo.isCompleted));
      return state.filter(todo => todo.isCompleted);

    case `filterAll`:
      console.log(state, `all`);

      return state;
    default:
      return state;
  }
};    

export default todoReducer;
