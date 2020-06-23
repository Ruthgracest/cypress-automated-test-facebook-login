describe('Facebook Login Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://facebook.com')

	
      // Get an input, type into it and verify that the value has been updated
    cy.get('#email')
      .type('(insert your facebook account email)')
	   .should('have.value', '(insert your facebook account email)')
	cy.get('#pass')
      .type('(insert your facebook account password)')
	  .should('have.value', '(insert your facebook account password')
    cy.get('#login_form').submit()
  })
})