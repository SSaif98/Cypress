/// <reference types="Cypress"/>


describe('Consoles', ()=>{

    it('Log in Web Browser and Test Runner',()=>{

        // "Test Google" will be Logged in WB even before google will open
        cy.visit('https://www.google.com')
        console.log("Test Google")
        
        cy.log('TR Log after google opens')

        // "Test Facebook" will be Logged in WB after facebook opens
        // If we want to use console of WB but with our choice then we have to handle the promise as console.log is not a cypress command
        cy.visit('https://www.facebook.com').then(()=>{
            console.log("Test Facebook")
        })
    })

})
