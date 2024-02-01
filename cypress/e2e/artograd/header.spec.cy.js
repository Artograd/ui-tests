describe('TC08: Verify "Sign In" Link', () => {
  it('should navigate to sign in page', () => {
    cy.visit('/')
    cy.contains('Sign In').click()
    cy.url().should('include', '/login') // Update with the correct URL
  })
})

describe('TC08: Verify "Sign Up" Link', () => {
  it('should navigate to sign up page', () => {
    cy.visit('/')
    cy.contains('Sign Up').click()
    cy.url().should('include', '/register') // Update with the correct URL
  })
})
