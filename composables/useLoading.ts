export default function () {
    return useState('loading', () => {
        return false;
    });
}