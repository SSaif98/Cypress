

/// <reference types= "Cypress"/>

describe('Handle Web Table',()=>{

    it('Web Tables (Particular String caught):',()=>{
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.table-display tbody tr td:nth-child(2)').each(($el, index, $list)=>{
      const courses = $el.text()
        if(courses === "Master Selenium Automation in simple Python Language"){
           expect(courses).to.equal('Master Selenium Automation in simple Python Language')
      cy.get('.table-display tbody tr td:nth-child(2)').eq(index).next().then((str) =>{
            const price = str.text()
            expect(price).to.equal('25')
      })
        } 
       })
       
    })

   
})