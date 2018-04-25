describe('Blog functionality should work', () => {
    it('Sign in button should exist', () => {
        cy.visit('http://localhost:3000/blog');
        cy.wait(8000);
        cy.get('a').contains('Sign in')
    });

    it('Sign up button should exist', () => {
        cy.get('a').contains('Get started')
    });

    it('Create button should appear when user is logged in', () => {
        cy.get('a').contains('Sign in')
            .click()
        cy.wait(3000);
        cy.get('div').contains('Log in with Google')
            .click()
        cy.wait(8000);
        cy.get('a').contains('Create')
    });

    it('Clicking on a blog should take you to the blog page', () => {
        cy.get('div.page-change-wrapper:first-of-type')
            .click()
        cy.get('div#resInput')
    });

    it('Clap button should exist on blog page', () => {
        cy.get('svg#clap--icon')
    });
})