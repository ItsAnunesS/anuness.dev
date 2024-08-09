import type {INotification} from "~/models/notifications";
import {NotificationType} from "~/models/notifications";

export const useNotificationsStore = defineStore('notifications', () => {
    const notifications: Ref<INotification[]> = ref([]);

    function addNotification(notification: INotification): void {
        if (!notification.type) notification.type = NotificationType.SUCCESS;
        notifications.value.push(notification);

        if (notification.removeAfter) {
            setTimeout(() => {
                removeNotification(notification.id)
            }, notification.removeAfter)
        }
    }

    function removeNotification(id: number): void {
        const index = notifications.value.findIndex((notification) => notification.id === id)
        if (index !== -1) {
            notifications.value.splice(index, 1)
        }
    }

    function getLastId(): number {
        return notifications.value.length > 0 ? notifications.value[notifications.value.length - 1].id: 0
    }

    return {
        notifications,
        addNotification,
        removeNotification,
        getLastId,
    }
})