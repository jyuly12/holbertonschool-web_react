import { shallow, mount } from "enzyme";
import React from "react";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";
import { StyleSheetTestUtils } from "aphrodite";
import notificationsNormalizer from "../schema/notifications";
import { Map, fromJS } from "immutable";
import { getUnreadNotificationsByType } from "../selectors/notificationSelector";

const NOTIFICATIONS = [
  {
    id: "5debd76480edafc8af244228",
    author: {
      id: "5debd764a7c57c7839d722e9",
      name: {
        first: "Poole",
        last: "Sanders",
      },
      email: "poole.sanders@holberton.nz",
      picture: "http://placehold.it/32x32",
      age: 25,
    },
    context: {
      guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
      isRead: true,
      type: "urgent",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  },
  {
    id: "5debd764507712e7a1307303",
    author: {
      id: "5debd7648ba8641ce0a34ea4",
      name: {
        first: "Norton",
        last: "Grimes",
      },
      email: "norton.grimes@holberton.nz",
      picture: "http://placehold.it/32x32",
      age: 37,
    },
    context: {
      guid: "cec84b7a-7be4-4af0-b833-f1485433f66e",
      isRead: false,
      type: "urgent",
      value:
        "ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ac tortor dignissim convallis aenean et. ",
    },
  },
  {
    id: "5debd76444dd4dafea89d53b",
    author: {
      id: "5debd764a7c57c7839d722e9",
      name: {
        first: "Poole",
        last: "Sanders",
      },
      email: "poole.sanders@holberton.nz",
      picture: "http://placehold.it/32x32",
      age: 25,
    },
    context: {
      guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
      isRead: false,
      type: "urgent",
      value:
        "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed",
    },
  },
];

describe("<Notifications />", () => {
  let listNotifications;
  let latestNotification;

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("Notifications renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("menu item is being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    const item = wrapper.find("div#menuItem");
    expect(item).toHaveLength(1);
  });
  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    const item = wrapper.find("div#Notifications");
    expect(item).toHaveLength(0);
  });
  it("menu item is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    wrapper.update();
    const item = wrapper.find("div#menuItem");
    expect(item).toHaveLength(1);
  });
  it("div.Notifications is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    wrapper.update();
    const item = wrapper.find("div#Notifications");
    expect(item).toHaveLength(1);
  });
    beforeEach(() => {
      latestNotification = getLatestNotification();
      listNotifications = {
        notifications: fromJS({
          messages: {
            1: {
              guid: 1,
              type: "default",
              value: "New course available",
              isRead: false,
            },
            2: {
              guid: 2,
              type: "urgent",
              value: "New resume available",
              isRead: false,
            },
            3: {
              guid: 3,
              type: "urgent",
              html: { __html: latestNotification },
              isRead: false,
            },
          },
        }),
      };
    });
  
  

  describe("Notifications without listNotifications or empty listNotifications", () => {
    beforeEach(() => {
      listNotifications = [];
    });

    

    it("verify that clicking on the menu item calls handleDisplayDrawer", () => {
      const handleDisplayDrawer = jest.fn();
      const handleHideDrawer = jest.fn();

      const wrapper = shallow(
        <Notifications
          handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={handleHideDrawer}
        />
      );

      wrapper.find("#menuItem").simulate("click");

      expect(handleDisplayDrawer).toHaveBeenCalled();
      expect(handleHideDrawer).not.toHaveBeenCalled();

      jest.restoreAllMocks();
    });

    it("verify that clicking on the button calls handleHideDrawer", () => {
      const handleDisplayDrawer = jest.fn();
      const handleHideDrawer = jest.fn();

      const wrapper = shallow(
        <Notifications
          displayDrawer
          handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={handleHideDrawer}
        />
      );

      wrapper.find("#closeButton").simulate("click");

      expect(handleDisplayDrawer).not.toHaveBeenCalled();
      expect(handleHideDrawer).toHaveBeenCalled();

      jest.restoreAllMocks();
    });

    it("verify that clicking on the menu item calls handleDisplayDrawer", () => {
      const setNotificationFilter = jest.fn();

      const wrapper = shallow(
        <Notifications
          setNotificationFilter={setNotificationFilter}
          displayDrawer={true}
        />
      );

      wrapper.find("#FilterUrgent").simulate("click");

      expect(setNotificationFilter).toHaveBeenNthCalledWith(1, "URGENT");

      wrapper.find("#FilterDefault").simulate("click");

      expect(setNotificationFilter).toHaveBeenNthCalledWith(2, "DEFAULT");

      jest.restoreAllMocks();
    });
  });
});