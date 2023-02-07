import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);

  logger.log('Access graphql playground in: http://localhost:3000/graphql');
}
bootstrap();
