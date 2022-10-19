Cypress.Commands.add('login', () => {
  cy.visit('/')
  cy.get(':nth-child(1) > .nav-link').should('be.visible')
  cy.get(':nth-child(2) > .nav-link').should('be.visible')
  cy.url().should(
    'be.equal',
    `${Cypress.config("baseUrl")}`

  )

})

Cypress.Commands.add('cadastro', () => {
  cy.visit('/')
  const faker = require('faker-br');
  cy.get(':nth-child(4) > .nav-link').click({ force: true })
  cy.get('a.small').click({ force: true })
  cy.get('#onetrust-accept-btn-handler').click({ force: true })

  const nomeFake = 'Ingrid' + faker.name.lastName();
  const emailFake = faker.internet.email(nomeFake);
  const senhaFake = faker.internet.password(8) + '1@Q';


  cy.get('#displayName').type(nomeFake)
  cy.get('#email').type(emailFake)
  cy.get('#password').type(senhaFake)
  cy.get('[type=checkbox]').check({ force: true }).should('be.checked')
  cy.get('[type=submit]').click()

  cy.get('.shadow', { timeout: 20000 }).should('contain', 'Back-End Developer')
  cy.get(':nth-child(1) > .custom-control > .checkbox-outline__label').click()
  cy.get(':nth-child(2) > .custom-control > .checkbox-outline__label').click()
  cy.get(':nth-child(3) > .custom-control > .checkbox-outline__label').click()
  cy.get('.col-md-12 > .form-text > div > :nth-child(1)').click()
  cy.get('#years_experience').should('be.visible')
  cy.get('#years_experience').select(2)
  cy.get('.react-tel-input > .form-control').type(21975612543)
  cy.get('[controlid="address.city"]').type('Rio de Janeiro')
  cy.get('#home-office-integral').click()
  cy.get('.w-100').click()
  cy.get('.col-lg-12 > .react-select > .css-yk16xz-control > .css-13tza3w').click().type('Saúde{enter}')
  cy.get('#race').select('Pessoa Negra')
  cy.get('#gender').select('Mulher')
  cy.get('#sexual_orientation').select('Heterossexual')
  cy.get('.btn-primary').click()
  cy.get('.h4').should('be.visible')
  cy.get('.btn-primary').should('be.visible')
  cy.contains('Responder agora').click()
})
Cypress.Commands.add('pass', () => {
  //cy.get('.btn-primary').should('be.enabled')
  cy.get('.btn-primary').should('be.visible')
  cy.get('.btn-primary').click({ force: true })

})

Cypress.Commands.add('score', () => {
  cy.get('.h2').should('be.visible')
  cy.get('.d-flex > .w-100').click({ force: true })
  cy.get(':nth-child(3) > .p-3 > .align-items-center').click()
})

Cypress.Commands.add('buscarVagas', () => {

  cy.get('.col-lg-7 > .input-group > .form-control').type('QA')
  cy.get('.align-self-lg-end > .btn-block').click()
  cy.url().should('contain', 'QA')
})

