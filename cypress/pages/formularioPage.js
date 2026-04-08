class FormularioPage {
  acessarFormulario() {
    cy.visit('https://regdoc.com.br/')
  }

  preencherNome() {
    cy.get('#first_name').type('Valdeci')
  }

  preencherSobrenome() {
    cy.get('#last_name').type('Macedo')
  }

  preencherEmail() {
    cy.get('#email').type('valdeci.macedo@ext.valid.com')
  }

  preencherTelefone() {
    cy.get('#phone').type('11953297078')
  }

  preencherEmpresa() {
    cy.get('#company').type('Empresa teste e2e')
  }

  enviarFormulario() {
    cy.get('button[type="submit"]').click()
  }
}

export default new FormularioPage()