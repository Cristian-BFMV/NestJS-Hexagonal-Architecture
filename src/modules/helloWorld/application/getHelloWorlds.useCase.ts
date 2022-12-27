import { Injectable } from '@nestjs/common';
import { HelloWorldRepository } from '../domain/helloWorld.repository';

@Injectable()
export default class GetHelloWorldUseCase {
  constructor(private readonly helloWorldRepository: HelloWorldRepository) {}

  public getHelloWorlds() {
    return this.helloWorldRepository
      .getHelloWorlds()
      .map((helloWorld) => ({ message: helloWorld.getMessage() }));
  }
}
