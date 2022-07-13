import { 
    logout,
    login,
    displayNotificationDrawer,
    hideNotificationDrawer,
    loginRequest,
    loginSuccess,
    loginFailure }
    from "./uiActionCreators";
import { 
    LOGIN, 
    LOGOUT, 
    DISPLAY_NOTIFICATION_DRAWER, 
    HIDE_NOTIFICATION_DRAWER }
    from "./uiActionTypes";

import fetchMock from "fetch-mock";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

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
    describe("Async action creators tests", function () {
    afterEach(() => {
      fetchMock.restore();
    })

    it("should verify that if the API returns the right response, the store received two actions LOGIN and LOGING_SUCCESS", () => {
      // Return the promise
      const store = mockStore({});
      fetchMock.restore();

      const user = {
        email: "test@test.com",
        password: "123456",
      }

      fetchMock.get("http://localhost:8564/login-success.json", "{}");

      return store
        .dispatch(loginRequest(user.email, user.password))
        .then(() => {
          const actions = store.getActions();
          expect(actions[0]).toEqual(login(user.email, user.password));
          expect(actions[1]).toEqual(loginSuccess());
        })
    })

    it("should verify that if the API query fails, the store received two actions LOGIN and LOGIN_FAILURE", () => {
      // Return the promise
      const store = mockStore({});

      fetchMock.mock("http://localhost:8564/login-success.json", 500);

      const user = {
        email: "test@test.com",
        password: "123456",
      }

      return store
        .dispatch(loginRequest(user.email, user.password))
        .then(() => {
          const actions = store.getActions();
          expect(actions[0]).toEqual(login(user.email, user.password));
          expect(actions[1]).toEqual(loginFailure());
        })
    })
  })
})