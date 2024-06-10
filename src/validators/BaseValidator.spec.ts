import { IValidationRule } from 'src/models/ValidationRule';
import { BaseValidator } from './BaseValidator';

class FakeValidationRule implements IValidationRule {
  validate = jest.fn();
}

describe('BaseValidator', () => {
  it('should return true if any rule is provided', () => {
    const baseValidator = new BaseValidator([]);

    const result = baseValidator.validate('input');
    expect(result).toBe(true);
  });

  it('should return false if all rules fail', () => {
    const failedRule = new FakeValidationRule();
    failedRule.validate.mockReturnValue(false);

    const baseValidator = new BaseValidator([
      failedRule,
      failedRule,
      failedRule,
    ]);

    const result = baseValidator.validate('input');
    expect(result).toBe(false);
  });

  it('should return false if any rule fails', () => {
    const passedRule = new FakeValidationRule();
    passedRule.validate.mockReturnValue(true);

    const failedRule = new FakeValidationRule();
    failedRule.validate.mockReturnValue(false);

    const baseValidator = new BaseValidator([passedRule, failedRule]);

    const result = baseValidator.validate('input');
    expect(result).toBe(false);
  });

  it('should return true if all rules pass', () => {
    const passedRule = new FakeValidationRule();
    passedRule.validate.mockReturnValue(true);

    const baseValidator = new BaseValidator([passedRule, passedRule]);

    const result = baseValidator.validate('input');
    expect(result).toBe(true);
  });
});
