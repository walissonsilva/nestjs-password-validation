import { Body, Controller, Post } from '@nestjs/common';
import {
  ValidatePasswordInputDTO,
  ValidationService,
} from '../services/validation.service';

@Controller('validate')
export class ValidationController {
  constructor(private readonly validationService: ValidationService) {}

  @Post('/password')
  validatePassword(@Body() input: ValidatePasswordInputDTO): boolean {
    return this.validationService.isPasswordValid(input);
  }
}
