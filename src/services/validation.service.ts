import { Injectable } from '@nestjs/common';
import { IsString } from 'class-validator';
import { PasswordValidator } from '../validators/PasswordValidator/PasswordValidator';

export class ValidatePasswordInputDTO {
  @IsString()
  password: string;
}

@Injectable()
export class ValidationService {
  constructor(private readonly passwordValidator: PasswordValidator) {}

  isPasswordValid(input: ValidatePasswordInputDTO): boolean {
    return this.passwordValidator.validate(input.password);
  }
}
