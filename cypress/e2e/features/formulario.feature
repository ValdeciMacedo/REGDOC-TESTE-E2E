Feature: Envio de formulário

  Scenario: Envio com sucesso
    Given que o usuário acessa o formulário
    When preenche nome
    And preenche sobrenome
    And preenche email
    And preenche telefone
    And preenche empresa
    And envia o formulário
    Then o formulário deve ser enviado com sucesso