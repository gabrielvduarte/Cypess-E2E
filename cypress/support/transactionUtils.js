export function addTransaction(description, amount, date) {
  cy.get('a[onclick*=open]').click();
  cy.get('#description').type(description);
  cy.get('#amount').type(amount);
  cy.get('#date').type(date);
  cy.contains('Salvar').click();
}