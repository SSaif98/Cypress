/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {

//Check boxes
//rahulshettyacademy.com
cy.visit(Cypress.env('url')+"/AutomationPractice/")

cy.get('#opentab').then(function(el)
{
    const url=el.prop('href')
    cy.visit(url)//qaclickacademy.com

    cy.origin(url, ()=>
    {
        cy.get("div.sub-menu-bar a[href*='about']").click()
    })


})



})


})




























