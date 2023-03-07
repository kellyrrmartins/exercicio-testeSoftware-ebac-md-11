///<reference types="cypress"/>

describe('Funcionalidade login', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  })
  afterEach(() => {
    cy.screenshot()
  })

  it('Fazer login na página EBAC shop com sucesso', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.page-title').should('contain', 'Minha conta')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should(
      'contain',
      'Olá, aluno_ebac (não é aluno_ebac? Sair)'
    )
  })

  it('Deve exibir uma mensagem de erro ao inserir usuario inválido', () => {
    cy.get('#username').type('ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain', 'e-mail desconhecido')
    // A menssagem com o endereço de email inválido não a parece,
    // A menssagem que aparece é de senha inválida
  })

  it('Deve exibir uma mensagem de erro ao inserir uma senha inválida', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain', 'Perdeu a senha?')
  })
})
// teste
