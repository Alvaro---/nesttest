import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/task';

import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  
    constructor(@InjectModel('task') private taskModel: Model<Task>){} 
    //Nombre del module viene de tasks.module

    async getTasks() {
        return await this.taskModel.find();
    }

    async getTask(id: string){
        return await this.taskModel.findById(id);
    }
}
