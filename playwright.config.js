import { defineConfig } from '@playwright/test';

// Define the port your production build is served on.
const PORT = 5000;

export default defineConfig({
  // Use the e2e-tests directory
  testDir: './e2e-tests',
  
  // Base URL for the tests
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'on-first-retry',
  },
  
  // Configure the development server
  webServer: {
    // This command now works because 'serve' is installed locally
    command: 'npm run start-prod', 
    url: `http://localhost:${PORT}`,
    timeout: 120 * 1000, 
    reuseExistingServer: !process.env.CI, 
  },
});
