import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { HelloWorldRepository } from 'modules/helloWorld/domain/helloWorld.repository';
import UpdateHelloWorldCommand from '../commands/updateHelloWolrd.command';

@CommandHandler(UpdateHelloWorldCommand)
export default class UpdateHelloWorldHandler
  implements ICommandHandler<UpdateHelloWorldCommand>
{
  constructor(private readonly helloWorldRepository: HelloWorldRepository) {}

  execute(command: UpdateHelloWorldCommand): Promise<string> {
    this.helloWorldRepository.updateHelloWorld(command.id, command.message);

    return Promise.resolve(command.message);
  }
}
