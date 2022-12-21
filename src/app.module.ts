import { Module } from '@nestjs/common';
import HelloWorldModule from 'modules/helloWorld/application/helloWorld.module';
import HelloWorldDomain from 'modules/helloWorld/domain/helloWorld.module';
import HelloWorldController from 'modules/helloWorld/infrastructure/helloWorld.controller';
import HelloWorldInfrastructure from 'modules/helloWorld/infrastructure/helloWorld.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [HelloWorldInfrastructure, HelloWorldModule, HelloWorldDomain],
  controllers: [AppController, HelloWorldController],
  providers: [AppService],
})
export class AppModule {}
