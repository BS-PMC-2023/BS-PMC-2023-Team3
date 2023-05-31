const puppeteer = require('puppeteer');

describe('Login Page', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    await page.goto('http://localhost:3001/Login.html', { timeout: 10000 }); // Replace with the actual URL of your login page
  });

  it('should display login form', async () => {
    await page.waitForSelector('#EMAIL');
    await page.waitForSelector('#PASSWORD');
    await page.waitForSelector('button[type="button"]');
  });

  it('should log in successfully with valid credentials', async () => {
    await page.waitForSelector('#EMAIL');
    await page.type('#EMAIL', 'yambi@ac.sce.ac.il');
    await page.type('#PASSWORD', '12345678');
    await Promise.all([
      page.waitForNavigation({ timeout: 60000  }), // Increase the timeout value to 30 seconds
      page.click('button[type="button"]')
    ]);
    expect(page.url()).toBe('http://localhost:3001/Connected');
  },60000);

  it('should display an error message with invalid credentials', async () => {
    await page.waitForSelector('#EMAIL');
    await page.type('#EMAIL', 'invalid@example.com');
    await page.type('#PASSWORD', 'wrongpassword');
    await page.click('button[type="button"]');
    await page.waitForSelector('.alert'); // Assuming an alert element is displayed for error messages
    const errorMessage = await page.$eval('.alert', (el) => el.textContent);
    expect(errorMessage).toContain('Invalid credentials'); // Replace with the expected error message
  },10000);
});
