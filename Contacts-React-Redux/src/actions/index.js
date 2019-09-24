import * as types from "./ActionTypes";

export function showDetail() {
  return {
    type: types.SHOW_DETAIL
  };
}

export function edit(contactData) {
  return {
    type: types.EDIT,
    editData: contactData
  };
}

export function create(contactData) {
  return {
    type: types.CREATE,
    createData: contactData
  };
}

export function remove(contactData) {
  return {
    type: types.REMOVE,
    removeData: contactData
  };
}

export function toggle(eventValue, isEdit) {
  return {
    type: types.TOGGLE,
    keyword: eventValue,
    isEdit: !isEdit
  };
}
