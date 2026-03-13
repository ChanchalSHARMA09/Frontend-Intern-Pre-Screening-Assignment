export const favouritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return [...state, action.payload];

    case "REMOVE_FAVOURITE":
      return state.filter((photo) => photo.id !== action.payload.id);

    default:
      return state;
  }
};
