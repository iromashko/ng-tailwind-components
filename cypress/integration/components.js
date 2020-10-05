/// <reference types="Cypress" />

describe("Accordion Component", () => {
  before(() => {
    cy.visit("");
  });
  it("Show accordion", () => {
    cy.get('[data-cy="accordion-component"]').should("be.visible");
  });
  it("Accordion content is hidden", () => {
    cy.get('[data-cy="accordion-content"]').should("not.be.visible");
  });
  it("Open accordion content", () => {
    cy.get('[data-cy="accordion-title"]').first().click({ force: true });
    cy.get('[data-cy="accordion-content"]').should("be.visible");
  });
});
