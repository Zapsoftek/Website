document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const openPopupBtn = document.getElementById('open-popup-btn');
    const popupOverlay = document.getElementById('popup-overlay');
    const closePopupBtn = document.getElementById('close-popup-btn');

    // Open the popup when the button is clicked
    openPopupBtn.addEventListener('click', () => {
        popupOverlay.style.display = 'flex';  // Show the popup
    });

    // Close the popup when the close button is clicked
    closePopupBtn.addEventListener('click', () => {
        popupOverlay.style.display = 'none';  // Hide the popup
    });

    // Close the popup if the user clicks anywhere outside the pop-up content
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });
});
