///<reference types= "cypress" />

describe('Al-Mosafer Lab 2', () => {
    it('filter the prices from lowest to highest', () => {
        cy.visit("https://www.almosafer.com/en")
        cy.get('.cta__saudi').click()
        cy.get('#uncontrolled-tab-example-tab-hotels > .sc-dWcDbm').click()
        let places =["jeddah","dubai","amman"]
        const randomCities = places[Math.floor(Math.random() * places.length)];
        cy.get('[data-testid="AutoCompleteInput"]').type(randomCities)
        cy.get('[data-testid="AutoCompleteResultItem0"]').click()
        cy.get('[data-testid="HotelSearchBox__SearchButton"]').click()
        cy.wait(46000)
        cy.get('[data-testid="HotelSearchResult__sort__LOWEST_PRICE"]').click()
        cy.get('.Price__Value').first().invoke('text').then((firstPrice) => {
            cy.get('.Price__Value').last().invoke('text').then((secondPrice) => {

                let firstPriceValue = parseFloat(firstPrice)
                let secondPriceValue = parseFloat(secondPrice)
                expect(firstPriceValue).to.be.lessThan(secondPriceValue)
            });
        });
          


        
    });
});