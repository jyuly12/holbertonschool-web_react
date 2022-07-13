import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    SET_LOADING_STATE,
    FETCH_NOTIFICATIONS_SUCCESS
    } from './notificationActionTypes'

import 'node-fetch';
import regeneratorRuntime from "regenerator-runtime";

export function markAsAread(index) {
    return { type : MARK_AS_READ, index}
}
export const markAsAreadBound = (index) => dispatch(markAsAread(index))

export function setNotificationFilter(filter) {
    return { type: SET_TYPE_FILTER, filter }
}
export const setNotificationFilterBound = (filter) => 
    dispatch(setNotificationFilter(filter))

export function setLoadingState(loadingState) {
    return {type: SET_LOADING_STATE, loadingState}
}

export function setNotifications(notification) {
    return { type: FETCH_NOTIFICATIONS_SUCCESS, notification }
}

const fetchNotifications = () => {
  return async (dispatch) => {
    dispatch(setLoadingState(true));
    try {
          try {
              const res = await fetch("./notifications.json")
              const data = await res.json()
              return dispatch(setNotifications(data))
          } catch (error) { }
      } finally {
          return dispatch(setLoadingState(false))
      }
  };
};
export default fetchNotifications;