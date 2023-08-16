// Get the modal element
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var openModalBtn = document.getElementById('openModalBtn');

// Get the <span> element that closes the modal
var closeModalBtn = document.getElementById('closeModalBtn');

// When the user clicks the button, open the modal
openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
    // Add smooth animation here (e.g., fadeIn effect)
    modal.style.opacity = '0';
    setTimeout(function() {
        modal.style.opacity = '1';
    }, 100);
});

// When the user clicks on <span> (x), close the modal
closeModalBtn.addEventListener('click', function() {
    // Add smooth animation here (e.g., fadeOut effect)
    modal.style.opacity = '0';
    setTimeout(function() {
        modal.style.display = 'none';
        modal.style.opacity = '1';
    }, 300);
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        // Add smooth animation here (e.g., fadeOut effect)
        modal.style.opacity = '0';
        setTimeout(function() {
            modal.style.display = 'none';
            modal.style.opacity = '1';
        }, 300);
    }
});
