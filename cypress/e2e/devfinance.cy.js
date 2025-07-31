/// <reference types="cypress" />

import { addTransaction } from '../support/transactionUtils';

beforeEach(() => {
  cy.visit("https://devfinance-agilizei.netlify.app/#")
});

describe('DevFinance', () =>{
    it('New input transaction value positive', () => {
       addTransaction('test','30','2025-07-23')  
       cy.get('#incomeDisplay').contains('R$ 30,00')
       cy.get('#totalDisplay').contains('R$ 30,00')

    });

      it('New input transaction negative', () => {
        addTransaction('test',"-30", '2025-07-23')
       cy.get('#expenseDisplay').contains('-R$ 30,00')
        cy.get('#totalDisplay').contains('-R$ 30,00')

        
    });
    
    it('New input transaction zero', () => {
        addTransaction('test',"00", '2025-07-23')
        cy.get('.expense').contains('R$ 0,00')
    });


    
});



