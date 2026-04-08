class LoginPage {
  acessarSite() {
    cy.visit('https://regdoc.com.br/')
  }

  clicarAreaCliente() {
    cy.xpath('//*[@id="menu-topo"]/div/a').click()
  }

  preencherEmail(email) {
    cy.get('#email_usuario').type(email)
  }

  preencherSenha(senha) {
    cy.get('#senha_usuario').type(senha)
  }

  clicarEntrar() {
    cy.get('button[type="submit"]').click()
  }
}

export default new LoginPage()