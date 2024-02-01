// e2e/specs/main_page_spec.cy.js
describe('TC01: Verify Main Page Load', () => {
  it('should load the main page correctly', () => {
    cy.visit('/')
    cy.contains('How it works') // Replace with a unique element on your main page
  })
});

describe('TC02: Verify "Join Community" Button', () => {
  it('should redirect to the community sign-up page', () => {
    cy.visit('/')
    cy.contains('Join Community').click()
    cy.url().should('include', '/register')
  })
});

describe('TC03: Verify "View Open Tenders" Link', () => {
  it('should navigate to open tenders page', () => {
    cy.visit('/')
    cy.contains('View open tenders').click()
    cy.url().should('include', '/tenders') // Update with the correct URL
  })
});

describe('TC04: Verify "Vote for proposed art projects" Link', () => {
  it('should navigate to open proposals page', () => {
    cy.visit('/')
    cy.contains('Vote for proposed art projects').click()
    cy.url().should('include', '/proposals') // Update with the correct URL
  })
});

describe('TC05: Verify "View and support art projects', () => {
  it('should navigate to open proposals page', () => {
    cy.visit('/')
    cy.contains('View and support art projects').click()
    cy.url().should('include', '/projects') // Update with the correct URL
  })
});


