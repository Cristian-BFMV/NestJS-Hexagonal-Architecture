import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { HelloWorldRepository } from 'modules/helloWorld/domain/helloWorld.repository';
import GetHelloWorldQuery from '../queries/getHelloWorld.query';

@QueryHandler(GetHelloWorldQuery)
export default class GetHelloWorldHandler
  implements IQueryHandler<GetHelloWorldQuery>
{
  constructor(private readonly helloWorldRepository: HelloWorldRepository) {}

  execute(query: GetHelloWorldQuery): Promise<any> {
    return Promise.resolve(this.helloWorldRepository.getHelloWorld(query.id));
  }
}
