import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingMiddleware } from './middleware/logging.middleware';

async function main() {
  const app = await NestFactory.create(AppModule);
  app.use(new LoggingMiddleware().use);
  await app.listen(3000, () => console.log('listening on port 3000'));
}
main();
