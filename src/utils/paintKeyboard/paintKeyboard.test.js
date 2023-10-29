import { describe, it, expect, vi } from 'vitest';
import { paintKeyboard } from './paintKeyboard'

vi.mock('./paintword', () => {
  return {
    paintWord: (secret, guess) => {
      if (secret === 'PIQUE') {
        return {
          HELLO: ['wrong', 'wrong place', 'wrong', 'wrong', 'wrong'],
          QUEUE: ['wrong place', 'wrong', 'wrong', 'right', 'right', ],
          PILOW: ['right', 'right', 'wrong', 'wrong', 'wrong', ],
        }[guess];
      }
    },
  }
});

// https://vitest.dev/guide/mocking.html

describe("paintKeyboard", () => {
  it("secret === PIQUE, guesses === [QUEUE, PILOW, HELLO]", () => {
    const actualResult = paintKeyboard('PIQUE', ['QUEUE', 'PILOW', 'HELLO'])
    const expectedResult = {
      p: 'right',
      q: 'wrong place',
      w: 'wrong',
      e: 'right',
      u: 'right',
      i: 'right',
      o: 'wrong',
      h: 'wrong',
      l: 'wrong',
    }
    expect(actualResult).toEqual(expectedResult);
  })
})