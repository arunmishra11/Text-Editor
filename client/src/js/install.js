// Get the install button element
const installButton = document.getElementById('buttonInstall');

// Logic for installing the PWA

// Add an event handler for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default mini-infobar from appearing
    event.preventDefault();
    
    // Make the install button visible and update its text
    installButton.style.visibility = 'visible';
    installButton.textContent = 'Install!';
});

// Implement a click event handler for the install button
installButton.addEventListener('click', async () => {
    // Disable the install button and update its text
    installButton.setAttribute('disabled', true);
    installButton.textContent = 'Installed!';
});

// Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Log the event and show a thank you message
    console.log('😇 App installed', event);
    alert('Thank you for installing our app!');
});
