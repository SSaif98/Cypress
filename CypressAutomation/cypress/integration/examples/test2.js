/// <reference types= "Cypress"/>

//const { isEqual } = require("cypress/types/lodash");

describe('First Test Suite',()=>{

    it('First Test Case',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/')
        cy.get('input[type="search"]').type("ca");
       // cy.get('.product:visible').should('have.length',4)

     //   cy.get('.products .product').should('have.length',4)   //parent child traversing using CSS Selector
        cy.get('.products').find('.product').should('have.length',4)   //parent child traversing using find keyword
    //How many products are displaying (by assertion)
    
    //click desired item.
    // 'eq' is used to get the index

    //Alias the web element
    cy.get('.products').as('products')

    cy.get('@products').find('.product').eq(1).contains('ADD TO CART').click()
    
    //Iterating each element 
    cy.get('@products').find('.product').each(($el, index, $list) =>{
        const vegName = $el.find('h4.product-name').text()
        if(vegName.includes('Cashews')){
            $el.find('button').click()
        }
    })
    cy.get('.search').clear().type('ra')
    cy.wait(2000)
    cy.get('@products').find('.product').eq(3).contains('ADD TO CART').click()

    cy.get('.products').find('.product').each(($el,index,$list)=>{

        const veg= $el.find('h4.product-name').text()
        if(veg.includes('Strawberry')){
            $el.find('button').click()
        }
    })
    cy.get('.cart-icon').find('img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()

    })
   

})