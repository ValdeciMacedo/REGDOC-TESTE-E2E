import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// -------------------- GIVEN --------------------
Given("que o usuário acessa o formulário", () => {
  cy.visit("https://regdoc.com.br/");
});

// -------------------- WHEN --------------------
When("preenche nome", () => {
  cy.get('#first_name', { timeout: 10000 })
    .should('exist')
    .type("Valdeci");
});

When("preenche sobrenome", () => {
  cy.get('#last_name').type("Macedo");
});

When("preenche email", () => {
  cy.get('#email').type("valdeci.macedo@ext.valid.com");
});

When("preenche telefone", () => {
  cy.get('#phone', { timeout: 10000 })
    .should('not.be.disabled')
    .type("11953297078");
});

When("preenche empresa", () => {
  cy.get('#company').type("Empresa teste e2e");
});

When("envia o formulário", () => {
  cy.get('form').submit(); // ou botão submit
});

// -------------------- THEN --------------------
Then("formulário enviado com sucesso", () => {
  
  cy.url().should("include", "regdoc.com.br");
});