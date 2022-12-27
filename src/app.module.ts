import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import HelloWorldDomain from 'modules/helloWorld/domain/helloWorld.module';
import HelloWorldController from 'modules/helloWorld/infrastructure/helloWorld.controller';
import HelloWorldInfrastructure from 'modules/helloWorld/infrastructure/helloWorld.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CqrsModule, HelloWorldInfrastructure, HelloWorldDomain],
  controllers: [AppController, HelloWorldController],
  providers: [AppService],
})
export class AppModule {}
