import { Module } from '@nestjs/common';
import GetHelloWorldUseCase from '../application/getHelloWorld.useCase';
import {HelloWorldJsonRepository} from '../infrastructure/helloWorld.jsonRepository';
import {HelloWorldRepository} from '../domain/helloWorld.repository'

@Module({
  providers: [GetHelloWorldUseCase,
  { provide: HelloWorldRepository, useClass: HelloWorldJsonRepository }],
  exports: [GetHelloWorldUseCase]
})
export default class UseCases {}
