export interface IValidationRule {
  validate(input: string): boolean;
}

export abstract class ValidationRule implements IValidationRule {
  abstract validate(input: string): boolean;
}
