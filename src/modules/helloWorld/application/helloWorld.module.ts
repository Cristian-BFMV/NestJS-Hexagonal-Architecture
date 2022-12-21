import { Module } from '@nestjs/common';
import HelloWorldDomain from 'modules/helloWorld/domain/helloWorld.module';
import HelloWorldJsonRepository from '../infrastructure/helloWorld.jsonRepository';
import GetHelloWorldUseCase from './getHelloWorld.useCase';

@Module({
  imports: [HelloWorldDomain],
  providers: [
    GetHelloWorldUseCase,
    { provide: 'HelloWorldRepository', useClass: HelloWorldJsonRepository },
  ],
  exports: [GetHelloWorldUseCase],
})
export default class HelloWorldModule {}
