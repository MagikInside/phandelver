import {GameState} from './models/game-state.model';
import {Character} from './models/character.model';

export const mockChars = [
  {
    attack: 13,
    condition: 'ok',
    defense: 5,
    dices: [],
    difficulty: 0,
    heals: 0,
    id: 'OpcWr4tvdSPnarDiQzvP',
    name: 'Hjaldur',
    roll: 0,
    stop: false,
    url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Hjaldur_zps2ogh1ft6.png',
  },
  {
    attack: 9,
    condition: 'ok',
    defense: 4,
    dices: [],
    difficulty: 0,
    heals: 0,
    id: 'wc24CrZne6pFpNitw0pG',
    name: 'Bror',
    roll: 0,
    stop: false,
    url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Bror_zpsfk5ejb3r.png',
  }
] as Character[];

export const gameState3Rolls = {
  characters: [
    {
      attack: 9,
      condition: 'critical',
      defense: 2,
      dices: ['❌', '❌', '✅'],
      difficulty: 0,
      heals: 0,
      id: 'CBoq9n6ybZ5fHtCavTRk',
      name: 'Sheras',
      roll: 7,
      stop: false,
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Sheras_zpsyfgdz1qm.png',
    }, {
      attack: 12,
      condition: 'injured',
      defense: 3,
      dices: ['💀', '✅', '✅'],
      difficulty: 0,
      heals: 0,
      id: 't8wMZDUHg1FYW32406QL',
      name: 'Bhayax',
      roll: 9,
      stop: false,
      url: 'https://i27.photobucket.com/albums/c182/MaGiK_InSiDe/Tokens/Bhayax_zps0b7p56r7.png',
    }
  ],
  round: {
    id: 'KilZs737Klb5h9O04uTi',
    lastFails: 2,
    lastSuccs: 9,
    number: 2,
    totalFails: 8,
    totalSuccs: 14,
  }
} as GameState;
