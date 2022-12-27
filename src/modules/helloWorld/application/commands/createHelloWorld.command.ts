import { ICommand } from '@nestjs/cqrs';

export default class CreateHelloWorldCommand implements ICommand {
  constructor(readonly message: string) {}
}
