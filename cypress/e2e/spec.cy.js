/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
describe("test input", () => {
  it("user can type-in", () => {
    cy.visit("http://localhost:5173");
    cy.get('[data-cy="inputText"]').type("Xin chao!");
  });

  it("the resulst should be the same what use type", () => {
    cy.visit("http://localhost:5173");
    cy.get('[data-cy="inputText"]').type("Xin chao!");
    cy.get('[data-cy="text"]').should("have.text", "Xin cho!");
  });
});
