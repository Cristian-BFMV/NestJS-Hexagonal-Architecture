import { Injectable } from '@nestjs/common';
import { db } from 'db/helloWorld';
import HelloWorld from '../domain/helloWorld';
import { HelloWorldRepository } from '../domain/helloWorld.repository';
@Injectable()
export class HelloWorldJsonRepository implements HelloWorldRepository {
  getHelloWorlds() {
    const helloWorlds = db.helloWorlds.map(
      ({ message }) => new HelloWorld(message),
    );

    return helloWorlds;
  }

  getHelloWorld(requestId: string) {
    const helloWorld = db.helloWorlds.find(({ id }) => requestId === id);

    return helloWorld ? new HelloWorld(helloWorld.message) : undefined;
  }

  createHelloWorld(message: string) {
    db.helloWorlds.push({ id: `${db.helloWorlds.length + 1}`, message });
  }

  updateHelloWorld(updateId: string, message: string) {
    const index = db.helloWorlds.findIndex(({ id }) => updateId === id);

    console.log(db.helloWorlds[index]);
    db.helloWorlds[index] = { ...db.helloWorlds[index], message };
  }

  deleteHelloWorld(deleteId: string) {
    const index = db.helloWorlds.findIndex(({ id }) => deleteId === id);

    db.helloWorlds.splice(index, 1);
  }
}
