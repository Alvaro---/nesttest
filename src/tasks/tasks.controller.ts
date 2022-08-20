import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { createTasks } from './dto/createTask.dto';

import { Task } from './interfaces/task';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  //   getTask(): {} { //devolver objeto
//   getTasks(): Task[] {
//     //   getTask(): { tasks: string } {
//     // return { tasks: 'hello world' };
//     return this.taskService.getTasks();
//   }
getTasks(): Promise<Task[]>{
    return this.taskService.getTasks();
}

  @Get(':taskId')
  getTask(@Param('taskId') taskId: string) {
    // return this.taskService.getTask(parseInt(taskId));
    return this.taskService.getTask(taskId);
  }

  @Post()
  createTasks(@Body() task: createTasks): string {
    const { nombre, description } = task;
    console.log(nombre, description);
    return 'creating a taskkk';
  }

  @Put(':id')
  updatetask(@Body() task: createTasks, @Param('id') id): string {
    console.log(task);
    console.log(id);
    return 'Actualizando tarea';
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    console.log(id);
    return `deleteee taks ${id}`;
  }
}
