cursors = document.querySelectorAll('.cursor');

window.addEventListener('mousemove', moveCursor);
window.addEventListener('scroll', moveCursor);

function moveCursor(e) {
    cursors.forEach(cursor => {
        cursor.style.top = e.clientY + "px";
        cursor.style.left = e.clientX + "px";
    });
}