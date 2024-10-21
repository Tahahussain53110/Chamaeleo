const fs = require('fs');

// Specify the directory to watch
const directoryToWatch = '/Users/dev/Desktop/chamaeleo';

// Function to handle file change events
const handleFileChange = (eventType, filename) => {
    console.log(`File ${filename} has been ${eventType}d`);
    // Add your logic to perform actions on file change here
};

// Start watching the directory for file changes
fs.watch(directoryToWatch, { recursive: true }, handleFileChange);

console.log(`Watching directory: ${directoryToWatch} for file changes...`);
