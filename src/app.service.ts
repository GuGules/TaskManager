import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  protected tasks = ["Item1", "Item2", "Item3"];

  getHello(): string {
    return 'Hello World!';
  }

  getTasks() {
    return this.tasks;
  }

  postTasks(name:string, description:string,completed:boolean) {
    const task : any = {};
    task.name = name;
    task.description = description;
    task.completed = completed;
    this.tasks.push(task);
    return task;
  }
  

}
