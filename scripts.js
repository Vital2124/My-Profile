// Function to handle tab switching
function openTab(event, tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tabcontent');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active class from all tab buttons
    const tabLinks = document.querySelectorAll('.tablinks');
    tabLinks.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the clicked tab content
    document.getElementById(tabName).classList.add('active');

    // Add active class to the clicked button
    event.currentTarget.classList.add('active');
}
