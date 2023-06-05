/// <reference types="Cypress" />

const neatCSV= require("neat-csv")

describe('Auth Login',()=>{

it('Register Member',()=>{
    cy.visit('https://rahulshettyacademy.com/client/')
    cy.contains('Register here').click()
    cy.get('#firstName').type('atiya')
    cy.get('#lastName').type('ali')
    cy.get('#userEmail').type('atiya@gmail.com')
    cy.get('#userMobile').type('3333360612')
    cy.get('select').select('Doctor')
    cy.get('[value="Male"]').check()
    cy.get('#userPassword').type('Saif1234.')
    cy.get('#confirmPassword').type('Saif1234.')
    cy.get('[type="checkbox"]').check()
    cy.get('#login').click()
})

it.only('It logged in through local storage',async()=>{
    let pN
    cy.LoginAPI().then(function(){
        cy.visit('https://rahulshettyacademy.com/client/',{
            onBeforeLoad :  function(window){
                window.localStorage.setItem('token',Cypress.env('token'))
            }
        })
    })
    cy.get('.card-body b').eq(2).then(function(ele){
        pN= ele.text();
    })
    cy.get('.card-body button:last-of-type').eq(2).click()
    cy.contains('Cart').click()
    //cy.get('[routerlink*="cart"]')
    cy.contains('Checkout').click()
    cy.get('[placeholder="Select Country"]').type("Pakistan")
    cy.get('section button span').click()
   /* cy.get('section button span').each(function($el,index,$list){
        if($el.text()==="Pakistan"){
           cy.wrap($el).click()
           }
    })*/
    cy.get('.btnn').click({force: true})
    cy.wait(2000)
    cy.get('tr button').contains('CSV').click()
  //  Cypress.config("fileServerFolder") // it gives location of the folder
    cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_atiya.csv")// it will get the text from csv file
    .then(async(text)=>{
        const csv= await neatCSV(text)
        cy.log(csv)
       const actualProductCSV= csv[0] ["Product Name"]
       expect(pN).to.equal(actualProductCSV)
    })
    
})

})