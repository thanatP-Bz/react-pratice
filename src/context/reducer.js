import { ADD_ITEM, DISPLAY_ALERT, REMOVE_ITEM, CLOSE_MODAL } from "./actions";

const reducer = (state, action) => {
  if (action.type === ADD_ITEM) {
    const newItem = [...state.people, action.payload];
    return {
      ...state,
      people: newItem,
      content: "item added",
      showModal: true,
    };
  }

  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      content: "please provide all values",
      showModal: true,
    };
  }

  if (action.type === REMOVE_ITEM) {
    const newPerson = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPerson,
      showModal: true,

      content: "item removed",
    };
  }

  if (action.type === CLOSE_MODAL) {
    return {
      ...state,
      showModal: false,
    };
  }

  throw new Error(`there is  ${action} `);
};

export default reducer;
