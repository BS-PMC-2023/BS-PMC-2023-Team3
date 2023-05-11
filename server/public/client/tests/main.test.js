describe('ChoosePage', () => {
    it('should redirect to Storgemanger if the title in sessionStorage is "StorgeManger"', () => {
      // Set up sessionStorage with the expected values
      sessionStorage.setItem('username', 'testuser');
      sessionStorage.setItem('title', 'StorgeManger');
  
      // Call ChoosePage and check that the page was redirected to Storgemanger
      const originalLocationHref = window.location.href;
      ChoosePage();
      expect(window.location.href).toEqual('http://localhost:3001/Storgemanger');
  
      // Clean up sessionStorage and reset the window location
      sessionStorage.clear();
      window.location.href = originalLocationHref;
    });
  
    it('should redirect to profile if the title in sessionStorage is not "StorgeManger"', () => {
      // Set up sessionStorage with the expected values
      sessionStorage.setItem('username', 'testuser');
      sessionStorage.setItem('title', 'SomeOtherTitle');
  
      // Call ChoosePage and check that the page was redirected to profile
      const originalLocationHref = window.location.href;
      ChoosePage();
      expect(window.location.href).toEqual('http://localhost:3001/profile');
  
      // Clean up sessionStorage and reset the window location
      sessionStorage.clear();
      window.location.href = originalLocationHref;
    });
  });
  
  describe('clearSessionStorage', () => {
    it('should clear sessionStorage and redirect to login page', () => {
      // Set up sessionStorage with some dummy values
      sessionStorage.setItem('username', 'testuser');
      sessionStorage.setItem('title', 'SomeTitle');
  
      // Call clearSessionStorage and check that sessionStorage was cleared and the page was redirected to login
      const originalLocationHref = window.location.href;
      clearSessionStorage();
      expect(sessionStorage.length).toEqual(0);
      expect(window.location.href).toEqual('http://localhost:3001/login');
  
      // Reset the window location
      window.location.href = originalLocationHref;
    });
  });