import { ICommand } from '@nestjs/cqrs';

export default class DeleteHelloWorldCommand implements ICommand {
  constructor(readonly id: string) {}
}
