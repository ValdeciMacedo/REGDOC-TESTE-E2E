Feature: Login no sistema REGDOC

  Scenario: Login com erro
    Given que o usuário acessa o site REGDOC
    When clica em área do cliente
    And preenche email inválido
    And preenche senha inválida
    And clica no botão acessar
    Then deve exibir mensagem de erro