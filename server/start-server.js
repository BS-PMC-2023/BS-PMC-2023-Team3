const { spawn } = require('child_process');

const serverProcess = spawn('npm', ['start']);

// Optional: Listen for events from the server process if you need to perform any actions based on the server's output

// Optional: Wait for the server to be ready before running the tests (e.g., wait for a specific log message)

// Once the server is ready, you can proceed with running the integration tests
