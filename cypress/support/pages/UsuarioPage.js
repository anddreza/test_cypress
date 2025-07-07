import mensagens from '../../fixtures/mensagens.json';

class UsuarioPage {

	go(){
		cy.visit('/usuarios');
	}

    typeSearch(nome){
        cy.get('#filtro-nome').clear().type(nome);
    }

	submit(){	
		cy.contains('button', 'Enter').click();
	}

    validateUser(nome) {
    cy.get('.usuario-nome').each(($el) => {
      cy.wrap($el).should('contain.text', nome);
    });
  }
}

export default new UsuarioPage ()