/// <reference types= "Cypress"/>

describe('Fake Test', ()=>{

    it('Fake# 1 MOCKING RESPONSE', ()=>{ 

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },{
            statusCode: 200,
            body: [{
                    "book_name": "Learn Appium Automation with Java",
                    "isbn": "RS56",
                    "aisle": "534227"
                }]
        }).as('bookretrievals')
        cy.get('.btn-primary').click()

        cy.wait('@bookretrievals').then(({request,response})=>{
            cy.get('tbody tr').should('have.length',response.body.length)
        })
        
        cy.get('p').should('have.text','Oops only 1 Book available')
    })
    //length of response array = rows of the table
    it('Fake# 2 MOCKING REQUEST',()=>{
        //cy.intercept(method, url, routeHandler)
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', 
        (req)=>{
            req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
            req.continue((res)=>{
                expect(res.statusCode).to.equal(404)
            })
        }).as('dummyUrl')
        cy.get('.btn-primary').click()
        cy.wait('@dummyUrl')

    })
    it('POST METHOD',()=>{
        cy.request('POST',' http://216.10.245.166/Library/Addbook.php', {
            "name":"Learn Appium",
            "isbn":"Saif",
            "aisle":"0300",
            "author":"Saif foe"
            }).then(function(response){
                expect(response.body).to.have.property("Msg","successfully added")
                expect(response.status).to.eq(200)
            })
    })
})