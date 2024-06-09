import { ValidationRule } from '../../models/ValidationRule';

export class MinLengthRule extends ValidationRule {
  constructor(private minLength: number) {
    super();
  }

  /**
   * Validate if the password provided has the min lenght defined in the class constructor.
   *
   * @param {string} password - string.
   * @returns {boolean} `true` if password length is greater than or equal to the minimum length; `false` otherwise.
   */
  validate(password: string): boolean {
    return password.length >= this.minLength;
  }
}

export class LowerCaseRule extends ValidationRule {
  /**
   * Validate if the password provided has at least one lowercase character.
   * @param password - string
   * @returns {boolean} `true` if password contains at least one lowercase character; `false` otherwise.
   */
  validate(password: string): boolean {
    return /[a-z]/.test(password);
  }
}

export class UpperCaseRule extends ValidationRule {
  /**
   * Validate if the password provided has at least one uppercase character.
   * @param password - string
   * @returns {boolean} `true` if password contains at least one uppercase character; `false` otherwise.
   */
  validate(password: string): boolean {
    return /[A-Z]/.test(password);
  }
}

export class DigitRule extends ValidationRule {
  /**
   * Validate if the password provided has at least one digit.
   * @param password - string
   * @returns {boolean} `true` if password contains at least one digit; `false` otherwise.
   */
  validate(password: string): boolean {
    return /\d/.test(password);
  }
}

export class SpecialCharacterRule extends ValidationRule {
  /**
   * Validate if the password provided has at least one special character.
   * @param password - string
   * @returns {boolean} `true` if password contains at least one special character; `false` otherwise.
   */
  validate(password: string): boolean {
    return /[!@#$%^&*()\-\+]/.test(password);
  }
}

export class NoRepeatedCharactersRule extends ValidationRule {
  /**
   * Validate if the password provided has no repeated characters.
   * @param password - string
   * @returns {boolean} `true` if password has no repeated characters; `false` otherwise.
   */
  validate(password: string): boolean {
    if (/(\w).*\1/.test(password)) return false;
    return true;
  }
}

export class NoSpaceRule extends ValidationRule {
  /**
   * Validate if the password provided has no space.
   * @param password - string
   * @returns {boolean} `true` if password has no space; `false` otherwise.
   */
  validate(password: string): boolean {
    const hasSpace = /\s/.test(password);
    return !hasSpace;
  }
}
