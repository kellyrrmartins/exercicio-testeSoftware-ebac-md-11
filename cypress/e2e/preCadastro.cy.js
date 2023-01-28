///<reference types="cypress"/>
let faker = require('faker')

describe('Funcionalidade pré-cadastro EBAC shop', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  })
  afterEach(() => {
    cy.screenshot()
  })
  it('Deve completar o pré cadastro com sucesso', () => {
    let firstFaker = faker.name.firstName()
    let lastFaker = faker.name.lastName()
    let emailFaker = faker.internet.email(firstFaker)

    cy.get('#reg_email').type(emailFaker)
    cy.get('#reg_password').type('teste@teste.com')
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

    cy.get('#account_first_name').type(firstFaker)
    cy.get('#account_last_name').type(lastFaker)
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should(
      'contain',
      'Detalhes da conta modificados com sucesso.'
    )
  })
})
