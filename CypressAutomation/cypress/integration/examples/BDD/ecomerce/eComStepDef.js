import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import HomePage  from '../../../pageObject/HomePage'
import ProductPage  from '../../../pageObject/ProductPage'
import ValidatingAmount  from '../../../pageObject/ValidatingAmount'
import DeliveryInfo  from '../../../pageObject/DeliveryInfo'

const homePage= new HomePage()
const productPage= new ProductPage()
const validatingAmount =new ValidatingAmount()
const deliveryInfo = new DeliveryInfo()

let name

    Given('I open Ecomerce page',()=>{
        cy.visit(Cypress.env('url')+'/angularpractice/')
    })

    When('I add items to cart', function(){
        homePage.getShop().click()
        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
        cy.selectProduct(this.data.productName)
        productPage.checkOut().click()
    })

    When('validate the total prices',()=>{
        var subAmount=0
        var total=0

        validatingAmount.totalProductPrice().then((str)=>{
            var total= str.text().substring(3)
            return total
          }).then((total)=>{
            validatingAmount.individualProductPrice().each(($el, index, $list)=>{
                const amount=   $el.text()
                subAmount= subAmount+  (Number(amount.substring(3))) //or we can use split function amount.split(" ") it will return 2 index values on 0th index there will be "rs." and on 1st index there will be " 5000" now use .trim function it will trim the white space
               if(subAmount==Number(total)){
              //  expect(subAmount).to.be.equal(total)
                cy.log('Amount is equal')
                cy.log(subAmount)
                cy.log(total)
               }
             })
          })
          validatingAmount.checkOut().click()
    }) 

    Then('select the country submit and verify thankyou message',()=>{
        deliveryInfo.enterCountry().type('Pakistan')
        //cy.wait(5000)
        Cypress.config('defaultCommandTimeout',8000) //spec level timout
        deliveryInfo.allSuggestions().each(($el, index, $list)=>{
         const countryName=   $el.find('a').text()
         if(countryName==="Pakistan"){
           deliveryInfo.selectedCountry().eq(index).click()
            cy.log(countryName)
            }
            deliveryInfo.agreement().check({force : true})
            deliveryInfo.purchase().click()
            deliveryInfo.validatingSuccessMsg().should('have.text','Success!')
        })
    })

    When('I fill the form detail',(dataTable)=>{
        name = dataTable.rawTable[1][0]
        homePage.getEdiBox().type(dataTable.rawTable[1][0])
        homePage.genderSelect().select(dataTable.rawTable[1][1])
    })

    Then('validate the from behaviour',function(){
        homePage.twoWayDataBinding().should('have.value',this.data.name)
        homePage.getEdiBox().should('have.attr','minlength','2')
        homePage.disabledRadio().should('be.disabled')
    })

    When('select the shop page',()=>{
        homePage.getShop().click()
    })