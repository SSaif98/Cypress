/// <reference types= "Cypress"/>

describe('Child Window Suite',()=>{

    it('Child Window',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      /*   cy.get('#opentab').then((el)=>{
         var link=   el.attr('href')
         cy.log(link)
         })

         */
         cy.get('#opentab').invoke('attr','href').then((str)=>{
            cy.visit(str)
         })
    })

})