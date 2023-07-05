/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(function () {
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    it('preenche os campos obrigatórios e envia o formulário', function () {
        const longText = "uububub buibuibiu egge geegege gegegrhrthj trheher herherh erhreh erherh erher hreher herher htrhjrtyj erth"
        cy.get('#firstName').type('julio')
        cy.get('#lastName').type('souza')
        cy.get('#email').type('lala@lala.com')
        cy.get('#open-text-area').type(longText, { delay: 0 })
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
        cy.get('#firstName').type('julio')
        cy.get('#lastName').type('souza')
        cy.get('#email').type('lalalala.com')
        cy.get('#open-text-area').type('teste')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    it('verifica telefone', function () {
        cy.get('#phone')
            .type('julio')
            .should('have.text', '')
    })
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
        cy.get('#firstName').type('julio')
        cy.get('#lastName').type('souza')
        cy.get('#email').type('lala@lala.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('teste')
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })
    it.only('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
        cy.get('#firstName')
            .type('julio')
            .clear()
        cy.get('#lastName').type('souza')
        cy.get('#email').type('lala@lala.com')
        cy.get('#phone')
    })

})
