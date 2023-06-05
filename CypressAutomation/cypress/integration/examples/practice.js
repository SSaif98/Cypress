/// <reference types= "Cypress"/>
/// <reference types= "cypress-iframe"/>
import 'cypress-iframe'


describe('Practice Test Suite', ()=>{
   
    it('P#1', ()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/')
        //Promise Handling
        cy.get('.brand').then((logoText)=>{
            cy.log(logoText.text())
        })
        //Typeing in search field
        cy.get('.search').type('ca')

        //Alias the web element
        cy.get('.products').as('products')

        //Validating the length of the search products
        cy.get('@products').find('.product:visible').should('have.length',4)
       //Selecting Cashews from the product
        cy.get('@products').find('.product').each(($el, index,$list) =>{
            const vegName = $el.find('h4.product-name').text()
            if(vegName.includes('Cashews')){
               cy.wrap( $el.find('button').click())
            }
        })
        //clearing the search field and writing ra
      /*  cy.get('.search-keyword').clear().type('ra')
        //Selecting 3rd index item (0,1,2)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        */
        cy.get('.cart-icon').find('img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
    it('Checkbox Practice' , ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').check().should('be.checked')
        cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').check(["option1",'option3'])
    })  
    it('Static Dropdown' , ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')
        cy.get('#dropdown-class-example').select('option3').should('have.value','option3')

        //cy.get('#dropdown-class-example').select('Select')
    })
    it('Radio Button' , ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="radio1"]').check().should('be.checked').and('have.value','radio1')

        cy.get('input[type="radio"]').check(['radio3'])
       
    })
    it('Visible & Invisible Element' , ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#displayed-text').should('be.visible')

        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')

        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')      
    })
    it('cy.log and console.log' , ()=>{
        console.log('This will console in WB even before the site is completely open')
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/').then( ()=>{
            console.log('This will console in WB even after the site is completely open')
        })
        cy.log('This will log in test runner after the site is completely open.')         
    })
    it('Child Tab and Navigations' , ()=>{       
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Case# 1 (Problem Case) on click child tab will open in new tab and cypress do not supports it
        //  cy.get('#opentab').click()
        //Case# 2 (Solution to Case#1) We have to reomve the attribute "target" so that child window will not open in new tab
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','academy')
        cy.go('back')
        cy.url().should('eq','https://rahulshettyacademy.com/AutomationPractice/')
    })
    it('Mouse Hover' , ()=>{        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')    
        //Cypress do not suport mouse hover we have to jquery for it. 
        /*
        //Case#1 in this case Top is hidden we are scanning whole DOM(hidden/not hidden) then clicking it
        //cy.get('#mousehover').invoke('show')
            cy.contains('Top').click({force : true})
            cy.url().should('include','Top')
        */
       //Case#2 In this case we having given 'show' property to the imediate parent of TOP
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')
    })
    it('Alerts' , ()=>{
       
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //Case#1
        /*
        cy.get('#alertbtn').click() //It will click on alert button and auto accpets it.        
        cy.on('window:alert', (str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })*/
        //Case#2
        /*
        cy.get('#name').type('Saif')
        cy.get('#alertbtn').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello Saif, share this practice page and share your knowledge')
        })
        */
       //Case#3
       /*
       cy.get('#confirmbtn').click()
       cy.on('window:confirm',(str)=>{
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
       })
       */
      //Case#4
    /*
       cy.get('#name').type('Saif')
       cy.get('#confirmbtn').click()
       cy.on('window:confirm',(str)=>{
        expect(str).to.equal('Hello Saif, Are you sure you want to confirm?')
       })
       */
      //Case#5
      /*
       cy.get('#confirmbtn').click()
       cy.on('window:confirm',(str)=>{
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
        return false
       })
       */
        
    })
    it('Web Tables' , ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        //the total number of courses present
        cy.get('.table-display tbody tr td:nth-child(2)').should('have.length',10)

        //cy.log following course name (WebServices / REST API Testing with SoapUI)
        cy.get('.table-display tbody tr td:nth-child(2)').each(($el, index,$list) =>{
           const courseName=  $el.text()
           if(courseName.includes('WebServices')){
                expect(courseName).to.equal('WebServices / REST API Testing with SoapUI')
                cy.log("Course Name is : " + courseName)
           }
        //cy.log the price of the course
        const coursePrice = $el.text()
        if(courseName.includes('WebServices')){
            //.next() will give you imediate sibiling of the element
            cy.get('.table-display tbody tr td:nth-child(2)').eq(index).next().then((price)=>{
                const cp  =  price.text()
                cy.log("Price : "+cp)
            })
        }
            
        })
        var p =0 ;
        cy.get('.table-display tbody tr td:nth-child(3)').each(($el, index, $list)=>{
            p = p + parseInt($el.text())
            if(p==235){
                console.log(p)
            }            
        })
        
    })
    it('Dynamic Dropdown' , ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

       cy.get('#autocomplete').type('pa')

       cy.get('.ui-menu-item-wrapper').each(($el, index, $list)=>{
        const country= $el.text()
        if(country === "Pakistan"){
            $el.click()
        }
       })
    })
    it('Child Windows' , ()=>{
       
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('attr','href').then((str)=>{
            cy.visit(str)
         })
      /*  cy.get('#opentab').then((el)=>{
            var link=   el.attr('href')
            cy.log(link)
            })*/
    })
    it.only('Frames' , ()=>{
       
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="mentorship"]').eq(0).click()
        cy.iframe().find('h1[class="pricing-title"]').should('have.length',2)
        
       
    })
})