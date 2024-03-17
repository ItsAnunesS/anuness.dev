export interface INotification {
    id: number
    text: string
    type: 'success' | 'error' | 'warning' | 'info'
    rounded?: boolean
    timeout?: number
    closeable?: boolean
}

export default function () {
    return useState('notifications', (): INotification[] => [
        {
            id: 1,
            text: 'this website is under construction',
            type: 'warning',
            closeable: true
        }
    ]);
}