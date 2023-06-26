import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    review: 아하,
  },
];

const reviews = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_REVIEWS":
      return [...state, action.payload];

    case "DELETE_REVIEWS":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

export default reviews;
