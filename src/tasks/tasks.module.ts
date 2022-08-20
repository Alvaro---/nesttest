import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { tastsSchema } from './schemas/task.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'task', schema: tastsSchema}
  ])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
