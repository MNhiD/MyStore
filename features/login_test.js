Feature('demo');

Scenario('Verify go to github page successfully', ({ I }) => {
    I.amOnPage('https://github.com');
    I.see('GitHub');
});
