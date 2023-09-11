describe('Visit Almosafer website and make 3 assertions', () => {
    before(() => {
        cy.visit("https://www.almosafer.com/ar")
        cy.get('.cta__saudi').click()
    });

    it('should ensure that the default currency is SAR', () => {
        cy.get('[data-testid="Header__CurrencySelector"]').should("contain.text", "SAR")
    });

    it('should ensure that the default language is Arabic', () => {
        cy.get('[data-testid="Header__LanguageSwitch"]').should("contain.text", "العربية")
    });

    it('should ensure that the flight tab is clicked by default', () => {
        cy.get('#uncontrolled-tab-example-tab-flights').should("have.class", "active")
    });
});
