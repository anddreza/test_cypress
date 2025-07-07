
import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import CartPage from '../../support/pages/CartPage'; //deduzindo que tem uma página CartPage, página não foi criada
import ProductsPage from '../../support/pages/ProductsPage'; // adicionar produto
import CartPage  from "../support/pages/CartPage"; //carrinho itens 
import LoginPage from '../support/pages/LoginPage'; //Step com mais informações, deduzindo que tem uma página LoginPage

Given("que um produto foi adicionado ao carrinho e o usuário acessa a página do carrinho", () => {
    // LoginPage.go();
    // LoginPage.doLogin(userData.usuarioSucesso.email, userData.usuarioSucesso.senha); 
    ProductsPage.go(); // página de produtos
    ProductsPage.addProduct('Produto Teste'); // adiciona um produto
    CartPage.go(); //PATH para a página do carrinho

});

When("clica no botão {string} do primeiro produto", (buttonText) => {
    CartPage.removeFirstProduct(buttonText); //remover o primeiro produto seria o mais fácil de mapear, a pre-condição seria sempre verificar se há produtos para facilitar o teste
});

Then("o contador do carrinho é atualizado para {string}", (expectedCount) => {
    CartPage.checkCartCounter(expectedCount); //produto teste, se for o caso criar massas dependendo do ambiente

});
