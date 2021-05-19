import {CharOptionsService} from './char-options.service';
import {gameState3Rolls, mockChars} from './mocks';
import {Condition} from './models/condition.enum';

describe('CharOptionsService', () => {
  let charOptionsService: CharOptionsService;

  beforeEach(() => {
    charOptionsService = new CharOptionsService();
  });

  it('the reset method should return a new GameState, with character and round values reset', () => {
    const resetChar = {...gameState3Rolls.characters[0], dices: [], condition: Condition.Ok, difficulty: 0, heals: 0, roll: 0, stop: false};
    const resetRound = {id: gameState3Rolls.round.id, number: 0, lastSuccs: 0, lastFails: 0, totalSuccs: 0, totalFails: 0};

    const newGameState = charOptionsService.reset(gameState3Rolls);

    expect(newGameState).not.toBe(gameState3Rolls);
    expect(newGameState.round).toEqual(resetRound);
    expect(newGameState.characters[0]).toEqual(resetChar);
  });

  it('the heal method should return a new character with +1 in heals and recalculated condition', () => {
    const criticalChar0Heals = gameState3Rolls.characters[0];

    const newChar = charOptionsService.healChar(criticalChar0Heals);

    expect(newChar).not.toBe(criticalChar0Heals);
    expect(newChar.heals).toBe(criticalChar0Heals.heals + 1);
    expect(newChar.condition).toBe('injured');
  });

  it('stopSwitch method should return a new character with the stop parameter switched (true, false, and vice versa)', () => {
    const newChar = charOptionsService.stopSwitch(mockChars[0]);
    expect(newChar).not.toBe(mockChars[0]);
    expect(newChar.stop).toBe(!mockChars[0].stop);
  });

  it('changeDifficulty method should return a new character with the new difficulty', () => {
    const newDifficulty = mockChars[0].difficulty + 1;
    const newChar = charOptionsService.changeDifficulty(mockChars[0], newDifficulty);
    expect(newChar.difficulty).toBe(newDifficulty);
  });

  it('should correctly calculate the condition of a character from the results obtained on dices', () => {
    const def3Char = gameState3Rolls.characters[1];
    const okChar = { ...def3Char, dices: ['✅', '✅', '✅']};
    const injuredChar = { ...def3Char, dices: ['❌', '✅', '✅']};
    const criticalChar = { ...def3Char, dices: ['💀', '❌', '✅']};
    const deadChar = { ...def3Char, dices: ['💀', '❌', '❌']};

    expect(charOptionsService.calculateCondition(okChar)).toBe('ok');
    expect(charOptionsService.calculateCondition(injuredChar)).toBe('injured');
    expect(charOptionsService.calculateCondition(criticalChar)).toBe('critical');
    expect(charOptionsService.calculateCondition(deadChar)).toBe('dead');
  });


});
