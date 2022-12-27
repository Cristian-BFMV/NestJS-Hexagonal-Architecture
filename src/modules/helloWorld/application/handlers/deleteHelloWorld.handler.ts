import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { HelloWorldRepository } from 'modules/helloWorld/domain/helloWorld.repository';
import DeleteHelloWorldCommand from '../commands/deleteHelloWorld.command';

@CommandHandler(DeleteHelloWorldCommand)
export default class DeleteHelloWorldHandler
  implements ICommandHandler<DeleteHelloWorldCommand>
{
  constructor(private readonly helloWorldRepository: HelloWorldRepository) {}

  execute(command: DeleteHelloWorldCommand): Promise<string> {
    this.helloWorldRepository.deleteHelloWorld(command.id);

    return Promise.resolve(command.id);
  }
}
