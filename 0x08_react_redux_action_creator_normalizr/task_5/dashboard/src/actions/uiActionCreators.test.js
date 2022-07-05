import { 
    logout,
    login,
    displayNotificationDrawer,
    hideNotificationDrawer }
    from "./uiActionCreators";
import { 
    LOGIN, 
    LOGOUT, 
    DISPLAY_NOTIFICATION_DRAWER, 
    HIDE_NOTIFICATION_DRAWER }
    from "./uiActionTypes";

describe('test action types', () => {
    it('login action', () =>{
        const user = { email: "example@mail.com", password: 123456789 };
        const response = { type: LOGIN, user };
        const action = login(user.email, user.password);

        expect(action).toEqual(response);
    })
    it('logout action', () => {
        const response = { type: LOGOUT };
        const action = logout();

        expect(action).toEqual(response);
    })
    it('displayNotificationDrawer action', () => {
        const response = { type: DISPLAY_NOTIFICATION_DRAWER };
        const action = displayNotificationDrawer();

        expect(action).toEqual(response);
    })
    it('hideNotificationDrawer action', () => {
        const response = { type: HIDE_NOTIFICATION_DRAWER };
        const action = hideNotificationDrawer();

        expect(action).toEqual(response);
    })
})