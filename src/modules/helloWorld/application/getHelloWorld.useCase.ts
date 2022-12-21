import { Inject, Injectable } from '@nestjs/common';
import { HelloWorldRepository } from '../domain/helloWorld.repository';

@Injectable()
export default class GetHelloWorldUseCase {
  constructor(
    @Inject('HelloWorldRepository')
    private helloWorldRepository: HelloWorldRepository,
  ) {}

  public getHelloWorld() {
    return this.helloWorldRepository.getHelloWorld().getMessage();
  }
}
