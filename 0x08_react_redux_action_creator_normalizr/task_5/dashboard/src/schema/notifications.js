import * as notifications from '../../notifications.json'
import { normalize, schema } from 'normalizr'

export function getAllNotificationsByUser(userId) {
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  const notificationsByUser = [];
  let item;

  for (item in notifications) {
    if (notifications[item].author === userId) {
      notificationsByUser.push(messages[notifications[item].context]);
    }
  }

  return notificationsByUser;
}

const user = new schema.Entity("users");

const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalizedData = normalize(notifications.default, [notification]);

export { normalizedData };