import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//const  cookieParser =require( id: 'cookie-parser');


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
