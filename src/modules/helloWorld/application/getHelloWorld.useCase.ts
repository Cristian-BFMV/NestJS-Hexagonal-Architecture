import { Inject, Injectable } from '@nestjs/common';
import { HelloWorldRepository } from '../domain/helloWorld.repository';

@Injectable()
export default class GetHelloWorldUseCase {
  constructor(
    private readonly helloWorldRepository: HelloWorldRepository,
  ) {}

  public getHelloWorld() {
    return this.helloWorldRepository.getHelloWorld().getMessage();
  }
}
