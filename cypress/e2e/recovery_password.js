import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import RecoveryPasswordPage from '../support/pages/RecoveryPasswordPage';
import user from '../../fixtures/usuario.json'; 

Given("que o usuário está na página de recuperação de senha", () => {
    RecoveryPasswordPage.go();
    RecoveryPasswordPage.clickPasswordRecovery();
});

When("informa um email válido", () => {
  RecoveryPasswordPage.fill(user.usuarioRecuperarSenha.email);
});

And ("clica no botão Recuperar", () => {
  RecoveryPasswordPage.submit();
});

Then("o sistema exibe uma mensagem {string}", () => {
  RecoveryPasswordPage.mensagemRecuperacao();
});
