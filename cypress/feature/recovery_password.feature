
Feature: Recuperação de senha
Scenario: Recuperar senha com email válido
    Given que o usuário está na página de recuperação de senha
    When informa um email válido 
    And clica no botão "Recuperar"
    Then o sistema exibe uma mensagem 
