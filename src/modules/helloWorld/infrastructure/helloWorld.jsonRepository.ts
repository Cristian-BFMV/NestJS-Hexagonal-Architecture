import { Injectable } from '@nestjs/common';
import { db } from 'db/helloWorld';
import { HelloWorldRepository } from '../domain/helloWorld.repository';
import HelloWorld from '../domain/helloWorld';
@Injectable()
export class HelloWorldJsonRepository implements HelloWorldRepository {
  getHelloWorld() {
    const helloWorld = new HelloWorld(db.helloWorlds[0].message);

    return helloWorld;
  }
}
