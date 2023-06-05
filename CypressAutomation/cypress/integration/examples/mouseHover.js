/// <reference types= "Cypress"/>

describe('Mouse Hover Suite',()=>{

    it('Mouse Hover',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')
        
       //in below case we are forcing to click the hidden element
       // cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force : true})
        cy.url().should('include','top')
    })

})