/// <reference types= "Cypress"/>

describe("Test Suit", ()=>{

    it("Mock Test Case:",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('h1').should("have.text","Practice Page")
    })
    it("Checkbox:",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#checkBoxOption1").check().should("be.checked")
        cy.get("input[value='option2']").check().should("be.checked")
        cy.get('input[type="checkbox"]').check('option3')
        cy.get('input[type="checkbox"]').uncheck().should('not.be.checked') 
    })
    it("Radio Button:",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('input[type="radio"]').check()
        cy.get("input[value='radio2']").check().should("be.checked")
    })
    it("Select-Dropdown:",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#dropdown-class-example').select('option3').should('have.value','option3')
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')
    })
    it("Suggestion:",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#autocomplete').type("pa")
        cy.get(".ui-menu-item").each(($el,index, $list)=>{
           if($el.find(".ui-menu-item-wrapper").text() === "Pakistan"){
            cy.wrap($el).click()
           }
        })    
    })   
    it("Alert:",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    /*    cy.get('#confirmbtn').click()  
        cy.on('window:confirm' ,(str)=>{
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })
*/
        cy.get('#name').type('Saif')
        cy.get('#confirmbtn').click()  
        cy.on('window:confirm' ,(str)=>{
            expect(str).to.equal("Hello Saif, Are you sure you want to confirm?")
          //  return false
        })

        cy.get('#name').type('Saif') 
        cy.get('#alertbtn').click()
        cy.on('window:alert' ,(str) =>{
            expect(str).to.equal("Hello Saif, share this practice page and share your knowledge")
        })
    })   
    it("Child Tab:",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','academy')
        cy.go('back')
        cy.url().should('eq','https://rahulshettyacademy.com/AutomationPractice/')
    })   
    it.only("Child Window:",()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('attr','href').then((str)=>{
            cy.visit(str)
         })

    })   
})