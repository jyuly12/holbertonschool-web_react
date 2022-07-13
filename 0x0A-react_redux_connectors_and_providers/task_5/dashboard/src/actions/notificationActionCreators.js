import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    SET_LOADING_STATE,
    FETCH_NOTIFICATIONS_SUCCESS
    } from './notificationActionTypes'

import 'node-fetch'

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
  return (dispatch) => {
    dispatch(setLoadingState(true));
    return fetch("./notifications.json")
      .then((res) => res.json())
      .then((data) => dispatch(setNotifications(data)))
      .catch((error) => {})
      .finally(() => dispatch(setLoadingState(false)));
  };
};
export default fetchNotifications;