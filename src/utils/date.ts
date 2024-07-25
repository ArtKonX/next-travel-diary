const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
};

export default function getDate(date: Date): string {
    const currentDate = new Date(date);
    return currentDate.toLocaleDateString('ru-RU', DATE_FORMAT_OPTIONS).replace(',', 'г. в ');
}