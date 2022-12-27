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
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Response } from 'express';
import CreateHelloWorldCommand from '../application/commands/createHelloWorld.command';
import DeleteHelloWorldCommand from '../application/commands/deleteHelloWorld.command';
import UpdateHelloWorldCommand from '../application/commands/updateHelloWolrd.command';
import GetHelloWorldQuery from '../application/queries/getHelloWorld.query';
import GetHelloWorldsQuery from '../application/queries/getHelloWorlds.query';

@Controller('helloworld')
export default class HelloWorldController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async getHelloWorlds(@Res() response: Response) {
    const helloWorlds = await this.queryBus.execute(new GetHelloWorldsQuery());

    return response.status(200).json({ data: helloWorlds });
  }

  @Get(':id')
  async getHelloWorld(@Res() response: Response, @Param('id') param: string) {
    const helloWorld = await this.queryBus.execute(
      new GetHelloWorldQuery(param),
    );

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
