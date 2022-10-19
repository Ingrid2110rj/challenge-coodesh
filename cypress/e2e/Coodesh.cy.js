//// <reference types="cypress" />
const faker = require('faker-br');

describe('Testando a página Beta da Coodesh', () => {


  it('Valida página principal', () => {
    cy.login()

  })
  it('Valida cadastro de usuário', () => {

    cy.cadastro()
    
    //Usuario deve responder questionário do ScoreCard
    for (let j = 1; j <= 3; j++) {
      for (let i = 1; i <= 10; i++) {
        cy.get(`:nth-child(${i}) > td > .rc-slider`).click()

        if (i == 10) {
          cy.pass()
        }
      }

    }
    cy.score()

  })

  it('Valida busca por vagas', () => {
    cy.buscarVagas()

  })
})



