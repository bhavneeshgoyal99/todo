import {
  FETCH_ACTIONS_SUCCESS,
  FETCH_ACTIONS_FAILURE,
  ADD_ACTION,
  DELETE_ACTION,
  UPDATE_ACTION,
} from "../actions/constants";

const initialState = {
  actions: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ACTIONS_SUCCESS:
      console.log("REduceer", { ...state, actions: action.payload });
      return { ...state, actions: action.payload };

    case FETCH_ACTIONS_FAILURE:
      return state;

    case ADD_ACTION:
      console.log("Add action", {
        ...state,
        actions: [...state.actions, action.payload],
      });
      return { ...state, actions: [...state.actions, action.payload] };

    case DELETE_ACTION:
      console.log("DELETE action", {
        ...state,
        actions: state.actions.filter((act) => act._id !== action.payload),
      });
      return {
        ...state,
        actions: state.actions.filter((act) => act._id != action.payload._id),
      };

    case UPDATE_ACTION:
      console.log(["Update action", state, action]);
      var tst = {
        ...state,
        actions: state.actions.map((act) =>
          act._id == action.payload._id ? action.payload : act
        ),
      };
      return tst;

    default:
      return state;
  }
}
