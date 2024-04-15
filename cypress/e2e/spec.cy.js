describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('http://localhost:8080/')

  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Adding a new task', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:8080');
    cy.get('#input').clear('t');
    cy.get('#input').type('test');
    cy.get('#butAdd').click();
    cy.get('.item').should('have.value', 'test');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Removing a task', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:8080');
    cy.get('#input').clear('Buy snacks');
    cy.get('#input').type('Buy snacks');
    cy.get('#butAdd').click();
    cy.get('.fa-trash').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Editing an existing task', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:8080');
    cy.get('#input').clear('Buy snacks');
    cy.get('#input').type('Buy snacks');
    cy.get('#butAdd').click();
    cy.get('.fa-edit').click();
    cy.get('.item').clear('Buy  snacks');
    cy.get('.item').type('Buy MORE snacks');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.item').should('have.value', 'Buy MORE snacks');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Handling empty task submission', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:8080');
    cy.get('#input').clear('Buy snacks');
    cy.get('#input').type('Buy snacks');
    cy.get('#butAdd').click();
    cy.get('#input').clear('test');
    cy.get('#input').type('test');
    cy.get('#butAdd').click();
    cy.get('p').should('have.text', 'Completed 0 of 2 tasks');
    cy.get('#butAdd').click();
    cy.get('p').should('have.text', 'Completed 0 of 2 tasks');
    /* ==== End Cypress Studio ==== */
  });
})