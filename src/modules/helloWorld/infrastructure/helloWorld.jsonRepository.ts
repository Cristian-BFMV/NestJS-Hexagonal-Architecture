import { Injectable } from '@nestjs/common';
import { db } from 'db/helloWorld';
import HelloWorld from '../domain/HelloWorld';
import { HelloWorldRepository } from '../domain/helloWorld.repository';

@Injectable()
export default class HelloWorldJsonRepository implements HelloWorldRepository {
  getHelloWorld() {
    const helloWorld = new HelloWorld(db.helloWorlds[0].message);

    return helloWorld;
  }
}
