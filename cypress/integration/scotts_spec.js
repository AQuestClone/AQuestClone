describe('aquest homepage to blog', () => {
    it('globe animation comes first', () => {
        cy.visit('http://localhost:3000/');
        cy.get('div.Globe')
            .should('exist')
    });
    
    it('should transition to homepage after globe animation', () => {
        cy.wait(7500)
        cy.get('div.spotlight')
            .should('exist');
    })

    it('check for menu to open when hamburger is clicked', () => {
        cy.get('div.hamburger')
            .click();
        cy.get('div.mainMenu')
            .should('exist');
    })

    it('check that menu goes away', () => {
        cy.get('div.hamburger')
            .click();
        cy.get('div.mainMenu')
            .should('not.exist');
    })
    
    it('change to blog', () => {
        cy.get('div.hamburger')
            .click();
        cy.get('h1#menuBlogLink')
            .click();
        cy.url().should('contain', '/blog');
    })
})