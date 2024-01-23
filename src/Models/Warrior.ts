import { IHeroes } from '../Apstraction/IHeroes';

import { Hero } from './Hero';

export class Warrior extends Hero implements IHeroes {
  constructor(
    hero: string,
    firstName: string,
    lastName: string,
    healthPoints: number,
    attackPoints: number,
    specialAttackPoints: number,
  ) {
    super(hero, firstName, lastName, healthPoints, attackPoints, specialAttackPoints);
  }
}
