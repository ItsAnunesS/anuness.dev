export enum NotificationType {
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning'
}

export interface INotification {
    id: number
    message: string
    type?: NotificationType
    removeAfter?: number
    action?: {
        label: string
        callback: () => void
    }
}