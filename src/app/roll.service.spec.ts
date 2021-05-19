import {RollService} from './roll.service';
import { mockChars} from './mocks';

describe('RollService', () => {
  let rollService: RollService;

  const mockRound = {id: '1', number: 0, lastSuccs: 0, lastFails: 0, totalSuccs: 0, totalFails: 0};

  const mockCharOptionsService = {
    // reset: jasmine.createSpy('reset'),
    // resetCharacter: jasmine.createSpy('resetCharacter'),
    // healChar: jasmine.createSpy('healChar'),
    // stopSwitch: jasmine.createSpy('stopSwitch'),
    // changeDifficulty: jasmine.createSpy('changeDifficulty'),
    calculateCondition: jasmine.createSpy('calculateCondition'),
  };

  beforeEach(() => {
    // @ts-ignore
    rollService = new RollService(mockCharOptionsService);
  });

  it('should roll for each character with the roll method', () => {
    mockCharOptionsService.calculateCondition.and.returnValue('ok');

    const newGameState = rollService.roll({characters: mockChars, round: mockRound});

    newGameState.characters.forEach(char => {
      expect(char.dices.length).toBe(1);
      expect(['💀', '❌', '✅', '💥', '➖'].includes(char.dices[0]));
    });
  });

  it('should call calculate condition for each character, and return a new object with the returned condition with the roll method', () => {
    mockCharOptionsService.calculateCondition.and.returnValue('fakeCondition');

    const newGameState = rollService.roll({characters: mockChars, round: mockRound});

    expect(mockCharOptionsService.calculateCondition.calls.first().args[0].id).toEqual(mockChars[0].id);
    expect(mockCharOptionsService.calculateCondition.calls.mostRecent().args[0].id).toEqual(mockChars[1].id);

    newGameState.characters.forEach(character => expect(character.condition).toBe('fakeCondition'));
  });

  it('should return a new Round object including the new information of the round with the roll method', () => {
    mockCharOptionsService.calculateCondition.and.returnValue('fakeCondition');

    const newGameState = rollService.roll({characters: mockChars, round: mockRound});

    expect(newGameState.round.number).toBe(1);
    expect(newGameState.round.totalSuccs).toBe(newGameState.round.lastSuccs);
    expect(newGameState.round.totalFails).toBe(newGameState.round.lastFails);
  });

  it('should roll for each character between 3 and 18 with the roll method', () => {
    mockCharOptionsService.calculateCondition.and.returnValue('fakeCondition');

    const newGameState = rollService.roll({characters: mockChars, round: mockRound});

    newGameState.characters.forEach(character => {
      expect(character.roll).toBeGreaterThanOrEqual(3);
      expect(character.roll).toBeLessThanOrEqual(18);
    });

  });

});
