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

describe("Progress Bar Component", () => {
  before(() => {
    cy.visit("");
  });
  it("Show Progress Bar", () => {
    cy.get('[data-cy="progress-bar"]').should("be.visible");
  });
  it("Progress Bar is hidden", () => {
    cy.get('[data-cy="progress-value"]').should("not.be.visible");
  });
  it("Progress Bar is full", () => {
    cy.get('[data-cy="progress-update"]').click({ force: true });
    cy.get('[data-cy="progress-value"]').should("be.visible");
    cy.get('[data-cy="progress-value"]').contains("100");
  });
});

describe("Star Ratings Component", () => {
  before(() => {
    cy.visit("");
  });
  it("Show Star ratings", () => {
    cy.get('[data-cy="star-ratings"]').should("be.visible");
  });
  it("Star ratings empty", () => {
    cy.get('[data-cy="star-ratings-empty"]').click();
    cy.get('[data-cy="star-ratings-empty"]').should("be.visible");
  });
  it("Star ratings half star", () => {
    cy.get('[data-cy="star-ratings-half"]').click();
    cy.get('[data-cy="star-ratings-half"]').should("be.visible");
  });
  it("Star ratings full", () => {
    cy.get('[data-cy="star-ratings-full"]').click();
    cy.get('[data-cy="star-ratings-full"]').should("be.visible");
  });
});
