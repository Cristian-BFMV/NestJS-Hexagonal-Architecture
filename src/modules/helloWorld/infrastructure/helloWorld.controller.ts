import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Response } from 'express';
import CreateHelloWorldCommand from '../application/commands/createHelloWorld.command';
import DeleteHelloWorldCommand from '../application/commands/deleteHelloWorld.command';
import UpdateHelloWorldCommand from '../application/commands/updateHelloWolrd.command';
import GetHelloWorldUseCase from '../application/getHelloWorld.useCase';
import GetHelloWorldsUseCase from '../application/getHelloWorlds.useCase';

@Controller('helloworld')
export default class HelloWorldController {
  constructor(
    private readonly getHelloWorldsUseCase: GetHelloWorldsUseCase,
    private readonly getHelloWorldUseCase: GetHelloWorldUseCase,
    private readonly commandBus: CommandBus,
  ) {}

  @Get()
  getHelloWorlds(@Res() response: Response) {
    const helloWorlds = this.getHelloWorldsUseCase.getHelloWorlds();

    return response.status(200).json({ data: helloWorlds });
  }

  @Get(':id')
  getHelloWorld(@Res() response: Response, @Param('id') param: string) {
    const helloWorld = this.getHelloWorldUseCase.getHelloWorld(param);

    if (!helloWorld)
      return response.status(204).json({
        message: 'Lo sentimos, no hay un dato asociado al id enviado',
      });

    return response.status(200).json({ data: helloWorld });
  }

  @Post()
  async createHelloWorld(
    @Body() body: { message: string },
    @Res() response: Response,
  ) {
    const hello = await this.commandBus.execute(
      new CreateHelloWorldCommand(body.message),
    );
    console.log(hello);

    return response.status(201).json({ message: `${hello} create` });
  }

  @Put(':id')
  async updateHelloWorld(
    @Body() body: { message: string },
    @Param('id') param: string,
    @Res() response: Response,
  ) {
    const hello = await this.commandBus.execute(
      new UpdateHelloWorldCommand(param, body.message),
    );
    console.log(hello);

    return response.status(201).json({ message: `${hello} update` });
  }

  @Delete(':id')
  async deleteHelloWorld(
    @Param('id') param: string,
    @Res() response: Response,
  ) {
    const hello = await this.commandBus.execute(
      new DeleteHelloWorldCommand(param),
    );
    console.log(hello);

    return response.status(201).json({ message: `${hello} delete` });
  }
}
