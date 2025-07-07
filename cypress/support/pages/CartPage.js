import mensagens from '../../fixtures/mensagens.json';

class ProductsPage {

	go(){
		cy.visit('/carrinho');
	}

    elements = {
        //contador
        cartCounter: () => cy.get('#contador-carrinho'),
    }
  
    removeFirstProduct(){
        cy.get('.product-item').first().find('button').contains('Remover');
    }
    
      /**
     * @param {string} expectedCount O valor esperado para o contador (ex: "0").
     */
    checkCartCounter(expectedCount) {
        this.elements.cartCounter().should('be.visible').and('have.text', expectedCount);
    }

}

export default new ProductsPage()
