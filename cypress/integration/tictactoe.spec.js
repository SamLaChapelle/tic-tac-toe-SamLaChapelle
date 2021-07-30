//TEST SUITE FOR HOME PAGE
describe('home page', () => {
    it('Visits home page', () => {
       cy.visit('http://localhost:5500') 
    })

    it('has multiplayer a link', () => {
        cy.get('[href="multi-player.html"]')
    })

    it('has single player link', () => {
        cy.get('[href="single-player.html"]').click()
    })
})
//TEST SUITE FOR SINGLE PLAYER PAGE
describe('single player', () => {
    before(() => {
        cy.visit('http://localhost:5500/single-player.html')
    })

    it('has tic tac toe board', () => {
        cy.get('.container')
    })

    it('has a start button', () => {
        cy.get('#start-button')
    })

    it('has multiplayer button in nav bar', () => {
        cy.get('[href="multi-player.html"]').click()
    })
})
//TEST SUITE FOR MULTIPLAYER PAGE
describe('multi player', () => {
    before(() => {
        cy.visit('http://localhost:5500/multi-player.html')
    })

    it('has tic tac toe board', () => {
        cy.get('.container')
    })

    it('has a start button', () => {
        cy.get('#start-button').click()
    })
})