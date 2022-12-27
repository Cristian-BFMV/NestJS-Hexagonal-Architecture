import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { HelloWorldRepository } from 'modules/helloWorld/domain/helloWorld.repository';
import CreateHelloWorldCommand from '../commands/createHelloWorld.command';

@CommandHandler(CreateHelloWorldCommand)
export default class CreateHelloWorldHandler
  implements ICommandHandler<CreateHelloWorldCommand>
{
  constructor(private readonly helloWorldRepository: HelloWorldRepository) {}

  execute(command: CreateHelloWorldCommand): Promise<string> {
    this.helloWorldRepository.createHelloWorld(command.message);

    return Promise.resolve(command.message);
  }
}
