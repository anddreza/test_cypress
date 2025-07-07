Feature: Remoção de produto do carrinho
  Scenario: Remover um produto do carrinho e atualizar o número de itens
    Given que um produto foi adicionado ao carrinho e o usuário acessa a página do carrinho
    When clica no botão "Remover" do primeiro produto
    Then o contador do carrinho é atualizado para "0"
