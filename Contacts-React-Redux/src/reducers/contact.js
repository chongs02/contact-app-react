import * as types from "../actions/ActionTypes";

const initialState = {
  selectedKey: -1,
  keyword: "",
  contactData: [
    {
      name: "Abet",
      phone: "010-0000-0001"
    },
    {
      name: "Betty",
      phone: "010-0000-0002"
    },
    {
      name: "Charlie",
      phone: "010-0000-0003"
    }
  ],
  isEdit: false
};

export default function contact(state = initialState, action) {
  switch (action.type) {
    case types.CREATE:
      return {
        ...state,
        contactData: [...state.contactData, action.createData]
      };

    case types.REMOVE:
      return {
        ...state,
        contactData: [action.removeData]
      };

    case types.TOGGLE:
      return {
        keyword: action.keyword
      };

    case types.EDIT:
      return {
        ...state,
        contactData: [action.editData]
      };

    default:
      return state;
  }
}
