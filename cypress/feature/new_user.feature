
Feature: Cadastro de novo usuário
Scenario: Realizar o cadastro de um novo usuário com dados válidos
    Given que o usuário deseja realizar o cadastro
    When preenche as informações de cadastro
    And clica no botão "Cadastrar"
    Then o sistema exibe uma mensagem