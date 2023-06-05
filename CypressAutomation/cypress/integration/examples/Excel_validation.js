/// <reference types="Cypress" />
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');


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
    cy.get('tr button').contains('Excel').click()
        //Browser (Engine) - JS Code -> Clint Side Env (Front End)  -- Cypress
            // It will automatically pasre the JS code and display it on browser

        //Node (Engine) - JS Code -> Back End Applications/Env 
            //It is more powerfull engine and it support extra js feature like Accessing File > fs, database access

        //Task - write all you file code or database code in task in cypress.config.js file, (ExcelToJson) -> cy.task(ExcelToJson)

  //  Cypress.config("fileServerFolder") // it gives location of the folder
    const filePath=Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_atiya.xlsx"
    cy.task('excelToJsonConverter', filePath).then(function(result){
        console.log(result)
        cy.log(result.data[1].A)
      expect(pN).to.equal(result.data[1].B)
        
    })
    //it will check that if the product name is present in excel file without knowing the location
    cy.readFile(filePath).then((text)=>{
        expect(text).to.include(pN)
    })
    
  });
 // 
    
})


