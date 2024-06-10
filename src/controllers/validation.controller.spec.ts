import { Test, TestingModule } from '@nestjs/testing';
import { ValidationController } from './validation.controller';
import { ValidationService } from '../services/validation.service';
import { PasswordValidator } from '../validators/PasswordValidator/PasswordValidator';

describe('ValidationController', () => {
  let validationController: ValidationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [ValidationController],
      providers: [ValidationService, PasswordValidator],
    }).compile();

    validationController = app.get<ValidationController>(ValidationController);
  });

  it('should return false if password is invalid', () => {
    const result = validationController.validatePassword({
      password: 'AbTp9!foA',
    });
    expect(result).toBe(false);
  });

  it('should return true if password is valid', () => {
    const result = validationController.validatePassword({
      password: 'AbTp9!fok',
    });
    expect(result).toBe(true);
  });
});
