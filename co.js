document.addEventListener('click', function(event) {
    let coords = {
        x: event.clientX,
        y: event.clientY
    };
    console.log(`Mouse clicked at: X=${coords.x}, Y=${coords.y}`);
});
