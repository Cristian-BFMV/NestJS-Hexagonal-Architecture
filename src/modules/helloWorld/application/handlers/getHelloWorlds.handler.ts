import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { HelloWorldRepository } from 'modules/helloWorld/domain/helloWorld.repository';
import GetHelloWorldQuery from '../queries/getHelloWorlds.query';

@QueryHandler(GetHelloWorldQuery)
export default class GetHelloWorldsHandler
  implements IQueryHandler<GetHelloWorldQuery>
{
  constructor(private readonly helloWorldRepository: HelloWorldRepository) {}

  execute(_query: GetHelloWorldQuery): Promise<any> {
    return Promise.resolve(this.helloWorldRepository.getHelloWorlds());
  }
}
