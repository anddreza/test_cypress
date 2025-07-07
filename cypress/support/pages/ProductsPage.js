import mensagens from '../../fixtures/mensagens.json';

class ProductsPage {

	go(){
		cy.visit('/produtos');
	}

 /**
     * Adiciona um produto
     * @param {string} productName //nome produto
     */

	 addProduct(productName) {
        cy.contains('.product-card', productName) 
          .find('button') 
          .contains('Adicionar ao Carrinho') 
    }


}

export default new ProductsPage()
