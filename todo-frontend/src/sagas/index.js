import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_ACTIONS,
  FETCH_ACTIONS_SUCCESS,
  FETCH_ACTIONS_FAILURE,
  ADD_ACTION,
  DELETE_ACTION_REQUEST,
  DELETE_ACTION,
  UPDATE_ACTION_REQUEST,
  UPDATE_ACTION,
  ADD_ACTION_REQUEST,
} from "../actions/constants";
import api from "../api.js";

function fetchActionsFromApi() {
  return api.get("/todos");
}

function addActionToDatabase(text) {
  return api.post("/todos", { task: text });
}

function deleteActionFromDatabase(id) {
  return api.delete(`/todos/${id}`);
}

function updateActionFromDatabase(id, state) {
  return api.put(`/todos/${id}`, { completed: state });
}

function* fetchActions() {
  try {
    const response = yield call(fetchActionsFromApi);

    yield put({ type: FETCH_ACTIONS_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: FETCH_ACTIONS_FAILURE });
  }
}

function* addAction(action) {
  try {
    const response = yield call(addActionToDatabase, action.payload);
    yield put({ type: ADD_ACTION, payload: response.data });
  } catch (e) {
    yield put({ type: FETCH_ACTIONS_FAILURE });
  }
}

function* deleteAction(action) {
  try {
    const response = yield call(deleteActionFromDatabase, action.payload);
    yield put({ type: DELETE_ACTION, payload: response.data });
  } catch (e) {
    yield put({ type: FETCH_ACTIONS_FAILURE });
  }
}

function* updateAction(action) {
  try {
    const response = yield call(
      updateActionFromDatabase,
      action.payload.id,
      action.payload.state
    );
    yield put({ type: UPDATE_ACTION, payload: response.data });
  } catch (e) {
    yield put({ type: FETCH_ACTIONS_FAILURE });
  }
}

function* mySaga() {
  yield takeLatest(FETCH_ACTIONS, fetchActions);
  yield takeLatest(ADD_ACTION_REQUEST, addAction);
  yield takeLatest(DELETE_ACTION_REQUEST, deleteAction);
  yield takeLatest(UPDATE_ACTION_REQUEST, updateAction);
}

export default mySaga;
