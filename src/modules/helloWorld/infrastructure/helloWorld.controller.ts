import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import GetHelloWorldUseCase from '../application/getHelloWorld.useCase';

@Controller('')
export default class HelloWorldController {
  constructor(private readonly getHelloWorldUseCase: GetHelloWorldUseCase) {}

  @Get()
  getHelloWorld(@Res() response: Response) {
    const helloWorld = this.getHelloWorldUseCase.getHelloWorld();

    return response.status(200).json({ message: helloWorld });
  }
}
