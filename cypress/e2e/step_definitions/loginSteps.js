
When("preenche email válido", () => {
  // Linha 16: Preencher email válido
  loginPage.preencherEmail("valdeci.macedo@ext.valid.com");
});

When("preenche senha válida", () => {
  // Linha 20: Preencher senha válida
  loginPage.preencherSenha("297590vA@@");
});

When("preenche email inválido", () => {
  // Linha 24: Preencher email inválido
  loginPage.preencherEmail("email@invalido.com");
});

When("preenche senha inválida", () => {
  // Linha 28: Preencher senha inválida
  loginPage.preencherSenha("123456");
});

When("clica no botão acessar", () => {
  // Linha 32: Clicar no botão acessar
  loginPage.clicarEntrar();
});

// -------------------- THEN --------------------
Then("o usuário deve ser logado com sucesso", () => {
  // Linha 37: Verifica URL e mensagem de sucesso
  // ⬅ Alterar esta linha se existir versão antiga
  cy.url({ timeout: 15000 }).should("not.include", "login"); // espera URL mudar

  // Linha 40: Verifica mensagem de sucesso
  // ⬅ Alterar esta linha se existir versão antiga
  cy.contains(/sucesso|bem-vindo/i, { timeout: 15000 }) // espera mensagem aparecer
    .should('exist') // verifica se está no DOM
    .should('be.visible'); // garante que está visível
});

Then("deve exibir mensagem de erro", () => {
  // Linha 46: Verifica mensagem de erro
  // ⬅ Alterar esta linha se existir versão antiga
  cy.contains(/erro/i, { timeout: 15000 })
    .should("exist") // garante que está no DOM
    .should("be.visible"); // garante que está visível
});