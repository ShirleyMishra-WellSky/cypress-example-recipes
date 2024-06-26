/// <reference types="cypress" />
describe('Viewports', () => {
  // on the public static site, the logo is rendered within a labeled link
  const logoSelector = 'a[aria-label="Return to cypress.io homepage"]'

  // ignore errors from the site itself
  Cypress.on('uncaught:exception', () => {
    return false
  })

  // run the same test against different viewport resolution
  const sizes = ['iphone-6', 'ipad-2', [1024, 768]]

  sizes.forEach((size) => {
    it(`displays logo on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }

      cy.visit('https://www.cypress.io')
      cy.get(logoSelector).should('be.visible')
    })
  })
})
