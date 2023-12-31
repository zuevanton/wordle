import { describe, it, expect } from 'vitest';
import { paintWord } from "./paintword";
describe("paintWord", () => {
  describe("secret === PEACE", () => {
    it("guess === SPORT", () => {
      const actualResult = paintWord("PEACE", "SPORT");
      const expetedResult = [
        'wrong',
        'wrong place',
        'wrong',
        'wrong',
        'wrong',
      ];

      expect(actualResult).toEqual(expetedResult);
    });
    it("guess === AWARD", () => {
      const actualResult = paintWord("PEACE", "AWARD");
      const expetedResult = [
        'wrong',
        'wrong',
        'right',
        'wrong',
        'wrong',
      ];

      expect(actualResult).toEqual(expetedResult);
    });
  });
});