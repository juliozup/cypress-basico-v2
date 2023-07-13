Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('julio')
    cy.get('#lastName').type('souza')
    cy.get('#email').type('lala@lala.com')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()
})