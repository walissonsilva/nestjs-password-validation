import { Module } from '@nestjs/common';
import { ValidationController } from './controllers/validation.controller';
import { ValidationService } from './services/validation.service';
import { PasswordValidator } from './validators/PasswordValidator/PasswordValidator';

@Module({
  imports: [],
  controllers: [ValidationController],
  providers: [ValidationService, PasswordValidator],
})
export class AppModule {}
