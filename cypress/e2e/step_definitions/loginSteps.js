import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/loginPage";

// -------------------- GIVEN --------------------
Given("que o usuário acessa o site REGDOC", () => {
  cy.visit("https://regdoc.com.br/");
});

// -------------------- WHEN --------------------
When("clica em área do cliente", () => {
  cy.get('#menu-topo > div > a').click();
});

When("preenche email válido", () => {
  cy.get('#email_usuario').type("valdeci.macedo@ext.valid.com");
});

When("preenche senha válida", () => {
  cy.get('#senha_usuario').type("297590vA@@");
});

When("preenche email inválido", () => {
  cy.get('#email_usuario').type("email@invalido.com");
});

When("preenche senha inválida", () => {
  cy.get('#senha_usuario').type("123456");
});

When("clica no botão acessar", () => {
  cy.get('button[type="submit"]').click();
});

// -------------------- THEN --------------------
Then("o usuário deve ser logado com sucesso", () => {

  cy.contains("As informações de login não foram encontradas.", { timeout: 10000 })
    .should("not.exist");
});

Then("deve exibir mensagem de erro", () => {

  cy.contains("As informações de login não foram encontradas.", { timeout: 10000 })
    .should("be.visible");
});