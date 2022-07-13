import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    FETCH_NOTIFICATIONS_SUCCESS}
    from '../actions/notificationActionTypes'
import notificationsNormalizer from '../schema/notifications'
import { Map } from 'immutable'


export const initialState = {
    notifications: [],
    filter: 'DEFAULT'
}

export default function notificationReducer(state = Map(initialState), action) {
    switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizeNotification = notificationsNormalizer(action.data);

      Object.keys(normalizeNotification.notifications).map((key) => {
        normalizeNotification.notifications[key].isRead = false;
      });
      return state.merge(normalizeNotification);

    case MARK_AS_READ:
      return state.setIn(
        ["notifications", String(action.index), "isRead"],
        true
      );

    case SET_TYPE_FILTER:
      return state.set("filter", action.filter);

    default:
      break;
  }
  return state;
};

