import { IValidationRule } from 'src/models/ValidationRule';

interface IBaseValidator {
  validate(input: string): boolean;
}

export class BaseValidator implements IBaseValidator {
  private rules: IValidationRule[];

  constructor(rules: IValidationRule[]) {
    this.rules = rules;
  }

  /**
   * Validate the input against all the rules.
   * @param input - string
   * @returns {boolean} `true` if all rules pass (returns `true`); `false` otherwise.
   */
  validate(input: string): boolean {
    return this.rules
      .map((rule) => rule.validate(input))
      .every((result) => result);
  }
}
