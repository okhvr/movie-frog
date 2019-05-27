describe('Header section', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
    });
    
    it('should contain app name', () => {
        cy.contains('moviefrogsroulette');
    });
});