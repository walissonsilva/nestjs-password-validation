import { Injectable } from '@nestjs/common';
import { BaseValidator } from '../BaseValidator';
import {
  MinLengthRule,
  DigitRule,
  LowerCaseRule,
  UpperCaseRule,
  SpecialCharacterRule,
  NoRepeatedCharactersRule,
  NoSpaceRule,
} from './PasswordRules';

export interface IPasswordValidator extends BaseValidator {}

@Injectable()
export class PasswordValidator
  extends BaseValidator
  implements IPasswordValidator
{
  constructor() {
    super([
      new MinLengthRule(9),
      new DigitRule(),
      new LowerCaseRule(),
      new UpperCaseRule(),
      new SpecialCharacterRule(),
      new NoRepeatedCharactersRule(),
      new NoSpaceRule(),
    ]);
  }
}
