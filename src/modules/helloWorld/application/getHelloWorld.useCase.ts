import { Injectable } from '@nestjs/common';
import { HelloWorldRepository } from '../domain/helloWorld.repository';

@Injectable({})
export default class GetHelloWorldUseCase {
  constructor(private readonly helloWorldRepository: HelloWorldRepository) {}

  getHelloWorld(id: string) {
    return this.helloWorldRepository.getHelloWorld(id);
  }
}
