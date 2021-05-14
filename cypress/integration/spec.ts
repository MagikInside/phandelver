describe('Main page', () => {

  before(() => {
    cy.visit('/');
    cy.wait(1000);
    cy.get('#reset').click();
    cy.wait(1000);
  });
  beforeEach(() => {
    cy.visit('/');
    cy.wait(1000);
  });
  it('should load 10 npcs', () => {
    cy.get('.npc').should('have.length', 10);
  });
  it('should should round info', () => {
    cy.get('.round-info.rounds .number .amount').should('contain', '0');
    cy.get('.round-info.last-succ .number .amount').should('contain', '0');
    cy.get('.round-info.last-fails .number .amount').should('contain', '0');
    cy.get('.round-info.total-info .succs').should('contain', '0');
    cy.get('.round-info.total-info .fails').should('contain', '0');
  });
  it('should roll for each character', () => {
    cy.get('#roll').click();
    cy.wait(2000);
    cy.get('.npc .dices').each(dices => {
      expect(dices.find('.dice').length).to.eq(1);
    });

  });

});
