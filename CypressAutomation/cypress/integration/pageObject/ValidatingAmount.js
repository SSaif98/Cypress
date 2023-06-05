class ValidatingAmount{
    individualProductPrice(){
        return cy.get('tbody tr td:nth-child(4) strong')
    }
    totalProductPrice(){
        return  cy.get('tbody tr td:nth-child(5) h3 strong')
    }
    checkOut(){
        return cy.get('.btn-success')
    }

}

export default ValidatingAmount