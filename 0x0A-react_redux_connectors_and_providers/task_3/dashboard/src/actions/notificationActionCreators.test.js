import { markAsAread, setNotificationFilter} from './notificationActionCreators'
import { 
    MARK_AS_READ,
    SET_TYPE_FILTER,
    NotificationTypeFilters}
    from "./notificationActionTypes";

describe('test action types', () => {
    it('markAsAread action', () => {
        const response = {
            type: MARK_AS_READ,
            index: 1
            }
        const action = markAsAread(1);

        expect(action).toEqual(response)
    })
    it('setNotificationFilter action, DEFAULT filter', () => {
        const response = {
            type: SET_TYPE_FILTER,
            filter: "DEFAULT"
        };
        const action = setNotificationFilter(NotificationTypeFilters.DEFAULT)

        expect(action).toEqual(response)
    })
    it('setNotificationFilter action, URGENT filter', () => {
        const response = {
            type: SET_TYPE_FILTER,
            filter: "URGENT"
        };
        const action = setNotificationFilter(NotificationTypeFilters.URGENT)

        expect(action).toEqual(response)
    })
})