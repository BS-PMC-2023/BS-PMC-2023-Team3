const { spawn } = require('child_process');

const testsProcess = spawn('npx', ['jest', '--config', 'jest.config.js', 'login.test.js']);

// Optional: Listen for events from the tests process if you need to perform any actions based on the test results

// Handle the output of the tests process (e.g., exit code, console output, etc.)
