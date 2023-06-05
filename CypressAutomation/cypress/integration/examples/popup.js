/// <reference types= "Cypress"/>

describe('Popup Suite',()=>{

    it('Auto Accepting Alert',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#name').type("Saif")
        cy.get('#alertbtn').click()

        cy.get('#name').type("Saif")
        cy.get('#confirmbtn').click()

        cy.on('window:alert', (str)=>{
            expect(str).to.equal('Hello Saif, share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello Saif, Are you sure you want to confirm?')
        })

              cy.on('window:confirm',(str)=>{
            return false
        })
    })

})