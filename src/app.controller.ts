import { Controller, Get, Post, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  @Get("hello")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("tasks")
  getTasks() {
    return this.appService.getTasks();
  }

  @Post("tasks")
  postTasks(): string {
    return this.postTasks();
  }
}
