import { Test, TestingModule } from '@nestjs/testing';
import { ValidationController } from './validation.controller';
import { ValidationService } from '../services/validation.service';
import { PasswordValidator } from '../validators/PasswordValidator/PasswordValidator';

describe('AppController', () => {
  let validationController: ValidationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ValidationController],
      providers: [ValidationService, PasswordValidator],
    }).compile();

    validationController = app.get<ValidationController>(ValidationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(validationController.validatePassword({ password: '123' })).toBe(
        false,
      );
    });
  });
});
