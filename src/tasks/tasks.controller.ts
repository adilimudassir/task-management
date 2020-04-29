import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import { CreateTaskDTO } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}
    
    @Get()
    index() : Task[] {
        return this.tasksService.all();
    }

    @Post()
    create(@Body() createTaskDTO: CreateTaskDTO) : Task {
        return this.tasksService.create(createTaskDTO)
    }

    @Get('/:id')
    show(@Param('id') id: string) {
        return this.tasksService.findById(id);
    }

    @Delete('/:id')
    destroy(@Param('id') id: string): void {
        this.tasksService.delete(id);
    }
}
