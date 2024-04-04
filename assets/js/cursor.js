// Move circular cursor
document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.getElementById('cursor');

    // Update cursor position
    function updateCursorPosition(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }

    // Event listener for mousemove event
    document.body.addEventListener('mousemove', function(e) {
        updateCursorPosition(e);
    });

    // Event listener for click event
    cursor.addEventListener('click', function(e) {
        // Handle clicking event here
        console.log('Cursor clicked!');
    });

    // Event listener for mouseover event
    cursor.addEventListener('mouseover', function(e) {
        // Handle mouseover event here
        cursor.style.transform = 'scale(1.2)';
    });

    // Event listener for mouseout event
    cursor.addEventListener('mouseout', function(e) {
        // Handle mouseout event here
        cursor.style.transform = 'scale(1)';
    });
});
