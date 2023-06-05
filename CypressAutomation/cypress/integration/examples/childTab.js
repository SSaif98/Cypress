/// <reference types= "Cypress"/>

describe('Handling Child Tabs',()=>{

    it('Child Tab',()=>{
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       cy.get('#opentab').invoke('removeAttr','target').click()
       cy.go('back')
       cy.go('forward')
       cy.reload()
       cy.url().should('include','academy')
       cy.url().should('eq','https://www.rahulshettyacademy.com/')
    })

})