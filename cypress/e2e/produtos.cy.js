///<reference types="cypress"/>

describe('Funcionaldade produto EBAC shop', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/2/')
  })

  it('Deve selecionar um produto da página', () => {
    let amount = 4

    cy.get('[class="product-block grid"]')
      .contains('Atomic Endurance Running Tee (V-neck)')
      .click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Yellow').click()
    cy.get('.input-text').clear().type(amount)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', amount)
    cy.get('.woocommerce-message').should(
      'contain',
      `${amount} × “Atomic Endurance Running Tee (V-neck)” foram adicionados no seu carrinho.`
    )
  })
})
