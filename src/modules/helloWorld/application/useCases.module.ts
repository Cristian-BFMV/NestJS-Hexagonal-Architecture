import { Module } from '@nestjs/common';
import { HelloWorldRepository } from '../domain/helloWorld.repository';
import { HelloWorldJsonRepository } from '../infrastructure/helloWorld.jsonRepository';
import CreateHelloWorldCommand from './commands/createHelloWorld.command';
import DeleteHelloWorldCommand from './commands/deleteHelloWorld.command';
import UpdateHelloWorldCommand from './commands/updateHelloWolrd.command';
import GetHelloWorldUseCase from './getHelloWorld.useCase';
import GetHelloWorldsUseCase from './getHelloWorlds.useCase';
import CreateHelloWorldHandler from './handlers/createHelloWorld.handler';
import DeleteHelloWorldHandler from './handlers/deleteHelloWorld.handler';
import UpdateHelloWorldHandler from './handlers/updateHelloWorld.handler';

@Module({
  providers: [
    GetHelloWorldsUseCase,
    GetHelloWorldUseCase,
    CreateHelloWorldHandler,
    CreateHelloWorldCommand,
    UpdateHelloWorldHandler,
    UpdateHelloWorldCommand,
    DeleteHelloWorldCommand,
    DeleteHelloWorldHandler,
    { provide: HelloWorldRepository, useClass: HelloWorldJsonRepository },
  ],
  exports: [
    GetHelloWorldsUseCase,
    GetHelloWorldUseCase,
    CreateHelloWorldHandler,
    CreateHelloWorldCommand,
    UpdateHelloWorldHandler,
    UpdateHelloWorldCommand,
    DeleteHelloWorldCommand,
    DeleteHelloWorldHandler,
  ],
})
export default class UseCases {}
