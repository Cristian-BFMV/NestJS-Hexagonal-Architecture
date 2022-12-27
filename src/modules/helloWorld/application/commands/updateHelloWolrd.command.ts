import { ICommand } from '@nestjs/cqrs';

export default class UpdateHelloWorldCommand implements ICommand {
  constructor(readonly id: string, readonly message: string) {}
}
