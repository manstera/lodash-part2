const box = document.getElementById('box');

function mouseMove(event){
    box.style.left = `${event.clientX - box.offsetWidth / 2}px`
    box.style.top = `${event.clientY - box.offsetHeight / 2}px`
}

const debouncedMouseMove = _.debounce(mouseMove, 100);
document.addEventListener('mousemove', debouncedMouseMove);



