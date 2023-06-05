/// <reference types="Cypress"/>

describe('Hooks Practice', function(){

    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    it('Hook Test Case', function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('#exampleFormControlSelect1').select(this.data.gender)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')

        cy.get('input[name="name"]:nth-child(2)').each(($el, index,$list)=>{
          const length =  $el.text()
          cy.log(length)
        })

        cy.get('input[name="name"]:nth-child(1)').should('have.value',this.data.name)
        cy.get('#inlineRadio3').should('be.disabled')

    })
})