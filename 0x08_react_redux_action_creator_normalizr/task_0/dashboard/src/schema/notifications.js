import * as notification from '../../notifications.json'

export function getAllNotificationsByUser(userId) {
    return notification.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
}