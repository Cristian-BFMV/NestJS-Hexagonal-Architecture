import { Module } from '@nestjs/common';
import { HelloWorldRepository } from '../domain/helloWorld.repository';
import { HelloWorldJsonRepository } from '../infrastructure/helloWorld.jsonRepository';
import CreateHelloWorldCommand from './commands/createHelloWorld.command';
import DeleteHelloWorldCommand from './commands/deleteHelloWorld.command';
import UpdateHelloWorldCommand from './commands/updateHelloWolrd.command';
import CreateHelloWorldHandler from './handlers/createHelloWorld.handler';
import DeleteHelloWorldHandler from './handlers/deleteHelloWorld.handler';
import GetHelloWorldHandler from './handlers/getHelloWorld.handler';
import GetHelloWorldsHandler from './handlers/getHelloWorlds.handler';
import UpdateHelloWorldHandler from './handlers/updateHelloWorld.handler';
import GetHelloWorldQuery from './queries/getHelloWorld.query';
import GetHelloWorldsQuery from './queries/getHelloWorlds.query';

@Module({
  providers: [
    CreateHelloWorldHandler,
    CreateHelloWorldCommand,
    UpdateHelloWorldHandler,
    UpdateHelloWorldCommand,
    DeleteHelloWorldCommand,
    DeleteHelloWorldHandler,
    GetHelloWorldsQuery,
    GetHelloWorldsHandler,
    GetHelloWorldHandler,
    GetHelloWorldQuery,
    { provide: HelloWorldRepository, useClass: HelloWorldJsonRepository },
  ],
  exports: [
    CreateHelloWorldHandler,
    CreateHelloWorldCommand,
    UpdateHelloWorldHandler,
    UpdateHelloWorldCommand,
    DeleteHelloWorldCommand,
    DeleteHelloWorldHandler,
    GetHelloWorldsQuery,
    GetHelloWorldsHandler,
    GetHelloWorldHandler,
    GetHelloWorldQuery,
  ],
})
export default class UseCases {}
