class DeliveryInfo{
    enterCountry(){
        return cy.get('#country')
    }
    allSuggestions(){
        return cy.get('.suggestions ul li')
    }
    selectedCountry(){
        return cy.get('.suggestions ul li a')
    }
    agreement(){
        return cy.get('#checkbox2')
    }
    purchase(){
        return cy.get('input[type="submit"]')
    }
    validatingSuccessMsg(){
       return cy.get('.alert-success strong')
    }
}

export default DeliveryInfo;