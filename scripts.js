// Function to open the respective tab content
function openTab(evt, tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tabcontent');
    tabContents.forEach(tab => {
        tab.style.display = 'none';
    });

    // Remove active class from all tab buttons
    const tabLinks = document.querySelectorAll('.tablinks');
    tabLinks.forEach(link => {
        link.className = link.className.replace(' active', '');
    });

    // Show the selected tab content
    document.getElementById(tabName).style.display = 'block';

    // Add the active class to the clicked tab button
    evt.currentTarget.className += ' active';
}

// Automatically open the first tab on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tablinks')[0].click();
});
