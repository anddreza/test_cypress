import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import NewUserPage from '../support/pages/NewUserPage';

Given("que o usuário deseja realizar o cadastro", () => {
    NewUserPage.go();
});

When("preenches informações de cadastro", () => {
  NewUserPage.fill();
});

And("clica no botão Cadastrar", () => {
  NewUserPage.submit();
});

Then("o sistema exibe uma mensagem", () => {
  NewUserPage.mensagemSucesso();
});
