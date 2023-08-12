import {
  FETCH_ACTIONS,
  ADD_ACTION_REQUEST,
  DELETE_ACTION_REQUEST,
  UPDATE_ACTION_REQUEST,
} from "./constants";

/**
 * Fetch actions
 *
 * @returns {Object}
 */
export const fetch_actions = () => {
  return {
    type: FETCH_ACTIONS,
  };
};

/**
 * Add action
 *
 * @param {String} text
 *
 * @returns {Object}
 */
export const add_action = (text) => {
  return {
    type: ADD_ACTION_REQUEST,
    payload: text,
  };
};

/**
 * Delete action
 *
 * @param {Number} id
 *
 * @returns {Object}
 */
export const delete_action = (id) => {
  console.log("Delete action with id", id);
  return {
    type: DELETE_ACTION_REQUEST,
    payload: id,
  };
};

/**
 * Update action
 *
 * @param {String} text
 *
 * @returns {Object}
 */
export const updateState_action = (id, state) => {
  console.log("Update action with id", id);
  return {
    type: UPDATE_ACTION_REQUEST,
    payload: { id, state },
  };
};
