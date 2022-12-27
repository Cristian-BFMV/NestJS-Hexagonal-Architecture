import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import UseCases from '../application/useCases.module';
import HelloWorldController from './helloWorld.controller';

@Module({
  imports: [UseCases, CqrsModule],
  controllers: [HelloWorldController],
  exports: [UseCases],
})
export default class HelloWorldInfrastructure {}
