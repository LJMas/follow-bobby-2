describe('Index Page Test', () => {
  it("Loads successfully", () => {
    cy.visit('/') 
  })
  it('Takes us to html page', () => {
    cy.visit('/')
    cy.contains('HTML').click()
    cy.url().should('include', '/html')
  })
  it('Takes us to nunjucks page', () => {
    cy.visit('/')
    cy.contains('NUNJUCKS').click()
    cy.url().should('include', '/nunjuck')
  })
})