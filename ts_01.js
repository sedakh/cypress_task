/// <reference types="cypress" />


describe('testing web app', () => {
    it('search', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.search_query').type('blouse')
        cy.get('[name="submit_search"]').click()
        cy.get('.product-count').contains('Showing 1 - 1 of 1 item')
        //invoke('text').should('contain', 'Showing 1 - 1 of 1 item')
        cy.get('[src="http://automationpractice.com/img/p/7/7-home_default.jpg"]').click()
        cy.url().should('contain', "http://automationpractice.com/index.php?id_product=2&controller=product")
        
        cy.get('[name="group_1"]').select('M')
        //cy.get('#add_to_cart').children('.exclusive').click()
            cy.get('#add_to_cart > button').click()
        cy.get('#layer_cart_product_attributes').contains('Black, M')
        cy.get('.button-medium > span').click()
        cy.get('[id="total_product"]').invoke('text').should('contain' , '$27.00' )
        cy.get('[id="total_shipping"]').invoke('text').should('contain' , '$2' )
        cy.get('[id="total_price"]').invoke('text').should('contain' , '$29' )
       
        cy.get('[id="total_product"]').then(price => {
            var pr = price.text() //$27
            var reg = /[0-9].*\.[0-9].*/
            var myArray = reg.exec(pr);
            cy.log(myArray)
  

        })
    })
} )