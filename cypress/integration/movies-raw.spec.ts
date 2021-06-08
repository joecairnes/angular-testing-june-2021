// movies-raw.spec.ts created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('movies raw', () => {

  it('really calls the API', () => {
    cy.visit('/movies/raw');
  });
});
