/// <reference types= "Cypress"/>

describe('Database Interaction',()=>{
    let data
    beforeEach(()=>{
        cy.visit('https://example.cypress.io/commands/waiting')
        cy.sqlServer("select * from Persons").then(function(resultSet){  //it gives you an array
           // console.log(resultSet[0][1])
           data=resultSet
        })
    })
    
    it('MY SQL Interaction',()=>{
       cy.get('.wait-input1').type(data[0][1])
        
    })

})
