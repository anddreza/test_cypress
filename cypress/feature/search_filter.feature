Feature: Filtro de busca na lista de usuários
Scenario Outline: Filtrar usuários pelo nome digitando no campo de busca 
    Given que o usuário clica no campo de busca
    When digita o nome "<nome>" no campo de nome
    And pressiona Enter
    Then o sistema exibe os usuários com nome "<nome>" pesquisado
  Examples:
    | nome    |
    | Andreza |
    | João    |
