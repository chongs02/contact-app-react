import * as types from "./ActionTypes";

export function search(keyword) {
  return {
    type: types.SEARCH,
    keyword
  };
}

export function showDetail() {
  return {
    type: types.SHOW_DETAIL
  };
}

export function edit(data) {
  return {
    type: types.EDIT,
    editData: data
  };
}

export function create(data) {
  return {
    type: types.CREATE,
    createData: data
  };
}

export function remove(data) {
  return {
    type: types.REMOVE,
    removeData: data
  };
}

export function toggle(eventValue) {
  return {
    type: types.TOGGLE,
    keyword: eventValue
  };
}
