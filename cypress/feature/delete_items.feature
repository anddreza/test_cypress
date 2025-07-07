
Feature: Exclusão de item da lista de tarefas 
Scenario: Excluir uma tarefa da lista 
    Given que o usuário deseja remover itens da lista
    When usuário clicar no botão "Excluir" da primeira tarefa
    Then o sistema exibe uma mensagem