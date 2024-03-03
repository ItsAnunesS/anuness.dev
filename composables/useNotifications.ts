export default function () {
    return useState('notifications', () => [
        {
            'text': 'this website is under construction',
            'rounded': false,
            'type': 'warning',
        }
    ]);
}