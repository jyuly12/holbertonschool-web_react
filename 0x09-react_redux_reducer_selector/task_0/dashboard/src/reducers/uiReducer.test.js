import uiReducer, {initialState} from './uiReducer'
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes'
import {SELECT_COURSE} from '../actions/courseActionTypes'

describe('test suite for simple reducer', () => {
    it('uiReducer function equals the initial state when no action is passed', () => {
        const response = uiReducer(undefined, {});

        expect(response).toEqual(initialState);
    })
    it('uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
        const response = uiReducer(undefined, {type: SELECT_COURSE})

        expect(response).toEqual(initialState);
    })
    it('uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () =>{
        const response = uiReducer(undefined, {type: DISPLAY_NOTIFICATION_DRAWER})
        const state = {...initialState, isNotificationDrawerVisible: true,}

        expect(response).toEqual(state)
    })
})