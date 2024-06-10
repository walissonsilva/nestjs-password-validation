import {
  DigitRule,
  LowerCaseRule,
  MinLengthRule,
  NoRepeatedCharactersRule,
  NoSpaceRule,
  SpecialCharacterRule,
  UpperCaseRule,
} from './PasswordRules';

describe('PasswordRules > Unit Tests', () => {
  describe('MinLengthRule', () => {
    it('should return true if password length is greater than or equal to the minimum length', () => {
      const rule = new MinLengthRule(2);

      const equalMinimunResult = rule.validate('12');
      const greaterThanMinimumResult = rule.validate('123');

      expect(equalMinimunResult).toBe(true);
      expect(greaterThanMinimumResult).toBe(true);
    });

    it('should return false if password length is less than the minimum length', () => {
      const rule = new MinLengthRule(2);

      const result = rule.validate('1');
      expect(result).toBe(false);
    });
  });

  describe('LowerCaseRule', () => {
    it('should return true if password contains at least one lowercase character', () => {
      const rule = new LowerCaseRule();

      const result = rule.validate('A1a');
      expect(result).toBe(true);
    });

    it('should return false if password does not contain any lowercase character', () => {
      const rule = new LowerCaseRule();

      const result = rule.validate('A1!');
      expect(result).toBe(false);
    });
  });

  describe('UpperCaseRule', () => {
    it('should return true if password contains at least one uppercase character', () => {
      const rule = new UpperCaseRule();

      const result = rule.validate('a1A');
      expect(result).toBe(true);
    });

    it('should return false if password does not contain any uppercase character', () => {
      const rule = new UpperCaseRule();

      const result = rule.validate('a1!');
      expect(result).toBe(false);
    });
  });

  describe('DigitRule', () => {
    it('should return true if password contains at least one digit', () => {
      const rule = new DigitRule();

      const result = rule.validate('a1A');
      expect(result).toBe(true);
    });

    it('should return false if password does not contain any digit', () => {
      const rule = new DigitRule();

      const result = rule.validate('aA!');
      expect(result).toBe(false);
    });
  });

  describe('SpecialCharacterRule', () => {
    it('should return true if password contains at least one special character', () => {
      const rule = new SpecialCharacterRule();

      const result = rule.validate('a1A!');
      expect(result).toBe(true);
    });

    it('should return false if password does not contain any special character', () => {
      const rule = new SpecialCharacterRule();

      const result = rule.validate('a1A');
      expect(result).toBe(false);
    });
  });

  describe('NoRepeatedCharactersRule', () => {
    it('should return true if password does not contain any repeated characters', () => {
      const rule = new NoRepeatedCharactersRule();

      const result = rule.validate('a1A!');
      expect(result).toBe(true);
    });

    it('should return false if password contains repeated characters', () => {
      const rule = new NoRepeatedCharactersRule();

      const result = rule.validate('a1A1');
      expect(result).toBe(false);
    });
  });

  describe('NoSpaceRule', () => {
    it('should return true if password does not contain any space', () => {
      const rule = new NoSpaceRule();

      const result = rule.validate('without_space');
      expect(result).toBe(true);
    });

    it('should return false if password contains space', () => {
      const rule = new NoSpaceRule();

      const result = rule.validate('with space');
      expect(result).toBe(false);
    });
  });
});
