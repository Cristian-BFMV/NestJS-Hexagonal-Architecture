import { Module } from '@nestjs/common';
import HelloWorldController from './helloWorld.controller';
import UseCases from '../application/userCases.module';

@Module({
  imports: [UseCases],
  controllers: [HelloWorldController],
  exports: [UseCases]
})
export default class HelloWorldInfrastructure {}
