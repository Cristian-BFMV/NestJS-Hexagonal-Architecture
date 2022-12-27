import { Injectable } from '@nestjs/common';
import HelloWorld from '../domain/helloWorld';

@Injectable()
export abstract class HelloWorldRepository {
  getHelloWorlds: () => Array<HelloWorld>;

  getHelloWorld: (id: string) => HelloWorld | undefined;

  createHelloWorld: (message: string) => void;

  updateHelloWorld: (id: string, message: string) => void;

  deleteHelloWorld: (id: string) => void;
}
