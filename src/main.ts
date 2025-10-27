import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata";
import { RequestContextInterceptor } from './common/interceptor/request-context-interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  app.useGlobalInterceptors(new RequestContextInterceptor());

  console.log(`🚀 Application is running on: ${await app.getUrl()}`);
}
bootstrap();
