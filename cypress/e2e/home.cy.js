describe('home', () => {
  it('aplicação de testes automatizados', () => {
    cy.visit('/')
    cy.title()
      .should('eq', 'Aplicação de Testes Automatizados')
  })
})