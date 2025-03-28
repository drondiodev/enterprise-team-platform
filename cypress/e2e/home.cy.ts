describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the hero section', () => {
    cy.get('h1').should('be.visible');
    cy.get('p').should('be.visible');
  });

  it('should have working navigation links', () => {
    cy.get('nav a').each(($el) => {
      cy.wrap($el).should('have.attr', 'href');
    });
  });

  it('should be responsive', () => {
    // Mobile
    cy.viewport('iphone-6');
    cy.get('nav').should('be.visible');

    // Tablet
    cy.viewport('ipad-2');
    cy.get('nav').should('be.visible');

    // Desktop
    cy.viewport(1280, 720);
    cy.get('nav').should('be.visible');
  });
});
