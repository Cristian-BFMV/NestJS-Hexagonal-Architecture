import { Injectable } from '@nestjs/common';
import HelloWorld from '../domain/helloWorld';

@Injectable()
export abstract class HelloWorldRepository {
  getHelloWorld: () => HelloWorld;
}
