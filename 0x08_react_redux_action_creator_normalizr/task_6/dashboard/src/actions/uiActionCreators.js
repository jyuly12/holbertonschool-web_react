import { 
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER}
    from "./uiActionTypes";

export function login(email, password){
    return { type: LOGIN, user : { email, password } }
}
export const loginBound = (email, password) => dispatch(login(email,password))

export function logout(){
    return { type: LOGOUT }
}
export const logoutBound = () => dispatch(logout())

export function displayNotificationDrawer(){
    return { type: DISPLAY_NOTIFICATION_DRAWER }
}
export const displayNotificationDrawerBound = () => 
    dispatch(displayNotificationDrawer())

export function hideNotificationDrawer(){
    return { type: HIDE_NOTIFICATION_DRAWER }
}
export const hideNotificationDrawerBound = () => 
    dispatch(hideNotificationDrawer())
