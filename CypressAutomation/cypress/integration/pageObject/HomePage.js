class HomePage{

    getEdiBox(){
        return cy.get('input[name="name"]:nth-child(2)')
    }
    twoWayDataBinding(){
        return  cy.get('input[name="name"]:nth-child(1)')
    }
    genderSelect(){
        return cy.get('#exampleFormControlSelect1')
    }
    disabledRadio(){
        return cy.get('#inlineRadio3')
    }
    getShop(){
        return  cy.contains('Shop')
    }

}


export default HomePage;