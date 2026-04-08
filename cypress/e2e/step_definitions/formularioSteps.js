import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import formularioPage from "../../pages/formularioPage";

Given("que o usuário acessa o formulário", () => {
  formularioPage.acessarFormulario()
})

When("preenche nome", () => {
  cy.get('#first_name', { timeout: 10000 }) // espera até 10s
    .should('exist')                        // garante que o elemento existe
    .should('be.visible')                   // garante que está visível
    .type('Valdeci')                        // então digita
});

When("preenche sobrenome", () => {
  formularioPage.preencherSobrenome()
})

When("preenche email", () => {
  formularioPage.preencherEmail()
})

When("preenche telefone", () => {
  formularioPage.preencherTelefone()
})

When("preenche empresa", () => {
  formularioPage.preencherEmpresa()
})

When("envia o formulário", () => {
  formularioPage.enviarFormulario()
})

Then("o formulário deve ser enviado com sucesso", () => {
  // espera até 10s para encontrar qualquer texto que contenha "sucesso" ou "enviado"
  cy.contains(/sucesso|enviado|obrigado/i, { timeout: 10000 })
    .should('be.visible');  // garante que está visível na tela
});