import { IQuery } from '@nestjs/cqrs';

export default class GetHelloWorldQuery implements IQuery {
  constructor(readonly id: string) {}
}
