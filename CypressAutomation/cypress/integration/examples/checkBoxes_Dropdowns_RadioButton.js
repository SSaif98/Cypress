/// <reference types="Cypress"/>

describe('Selection  Suite',()=>{

    it('Checkbox Test Case', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')       
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        //select multiple(all) checkbox
        //cy.get('input[type="checkbox"]').check()
        //select multiple(custom) checkbox
        cy.get('input[type="checkbox"]').check(['option1','option3'])        
    })
    it('Radio Button', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="radio1"]').check().should('be.checked').and('have.value','radio1')  
       
        //Will check all three radio button but because of default behaviour of radio button only one will be checked.
        cy.get('input[type="radio"]').check()      
    })

    it('Static Dropdown',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('select').select('option2')
            .should('have.value','option2')       
    })

    it('Dynamic Dropdown',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('pa')

        cy.get('.ui-menu-item div').each(($el, index, $list)=>{
           if($el.text()==="Pakistan"){
            $el.click()
           }
        })
        cy.get('#autocomplete').should('have.value','Pakistan')
    })

    it('Handle visible and invisible elements',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })

    
})