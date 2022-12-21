import { Module } from '@nestjs/common';
import GetHelloWorldUseCase from '../application/getHelloWorld.useCase';
import HelloWorldApplication from '../application/helloWorld.module';
import HelloWorldController from './helloWorld.controller';

@Module({
  imports: [HelloWorldApplication],
  controllers: [HelloWorldController],
  providers: [GetHelloWorldUseCase],
})
export default class HelloWorldInfrastructure {}
