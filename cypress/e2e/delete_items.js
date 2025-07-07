import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DeleteItems from '../support/pages/DeleteItems';

Given("que o usuário deseja remover itens da lista", () => {
    DeleteItems.go();
});

When("usuário clicar no botão 'Excluir' da primeira tarefa", () => {
  DeleteItems.clickFirstTask();
  DeleteItems.submit();
});

Then("o sistema exibe uma mensagem", () => {
  DeleteItems.mensagemExcluir();
});
