import { slowCypressDown } from 'cypress-slow-down';

slowCypressDown();

describe('empty spec', () => {
	it('navigation with GUESS PAGE', () => {
		cy.visit('/');
		cy.contains("Welcome to ZPPark").should('be.visible');

		// click login btn
		cy.contains("Log In").click();
		cy.contains("Log In").should('not.exist');
		cy.contains("Register").should('exist');

		// login with account wrong pass
		cy.get('input[type="email"]').type("demoparksample.com");
		cy.get('input[type="email"]').clear();
		cy.get('input[type="email"]').type("demopark@sample.com");
		cy.get('input[type="password"]').type("headingto1");
		cy.get("#passwordField span").click();
		cy.get("#passwordField span").click();
		cy.contains("LOG IN").click();

		// login with account correct pass
		cy.get('button[aria-label="Close"]').click();
		cy.get('input[type="password"]').clear().type("headingto");
		cy.get("#passwordField span").click();
		cy.get("#passwordField span").click();
		cy.contains("LOG IN").click();


		// dashboard page
		cy.get('input[type="text"]').focus().type("vin");
		// cy.get('input[type="text"] btn').()
		cy.get('input[type="text"]').get('button').first().focus().click();
		cy.get('input[type="text"]').type("Quận{enter}");

		// chart page
		cy.contains("Earning of vehicles").should('be.visible');
		// cy.scrollTo('bottom');
		// cy.scrollTo('top');
		cy.get("button").click();

		// tick
		cy.wait(500);
		cy.get('[type="checkbox"]').first().check({force: true});
		cy.get('[type="checkbox"]').then($elements => {
			cy.wrap($elements[2]).click({force: true});
			cy.wrap($elements[3]).click({force: true});
		});
		cy.contains("Launch").click();

		cy.contains("Log Out").click();
	})
})