import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import UsuarioPage from '../support/pages/UsuarioPage';

Given("que o usuário clica no campo de busca", () => {
    UsuarioPage.go();
});

When("digita o nome {string} no campo de nome", () => {
  UsuarioPage.typeSearch();
});

And ("clica no botão Recuperar", () => {
  UsuarioPage.submit();
});

Then("o sistema exibe os usuários com nome {string} pesquisado", (nome) => {
  UsuarioPage.validateUser(nome);
});
