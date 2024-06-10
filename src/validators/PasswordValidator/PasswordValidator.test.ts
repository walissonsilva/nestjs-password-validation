import { PasswordValidator } from './PasswordValidator';

describe('PasswordValidator', () => {
  describe('Invalid Passwords', () => {
    it('should return false if password is empty', () => {
      const passwordValidator = new PasswordValidator();

      const result = passwordValidator.validate('');
      expect(result).toBe(false);
    });

    it('should return false if password is invalid', () => {
      const passwordValidator = new PasswordValidator();

      const result = passwordValidator.validate('AbTp9 fok');
      expect(result).toBe(false);
    });
  });

  describe('Valid Passwords', () => {
    it('should return true if password is valid', () => {
      const passwordValidator = new PasswordValidator();

      const result = passwordValidator.validate('AbTp9!fok');
      expect(result).toBe(true);
    });
  });
});
