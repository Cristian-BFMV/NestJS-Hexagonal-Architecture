import HelloWorld from './HelloWorld';

export interface HelloWorldRepository {
  getHelloWorld: () => HelloWorld;
}
