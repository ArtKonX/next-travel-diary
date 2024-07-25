export default function autoResizeTextarea(e) {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;

    if (e.target.value.trim() === '') {
        e.target.style.height = '1rem';
    }
}