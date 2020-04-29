import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import * as uuid from 'uuid/v1';
import { CreateTaskDTO } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    all() {
        return this.tasks;
    }

    findById(id: string) : Task {
        return this.tasks.find(task => task.id === id);
    }
    
    create(createTaskDTO: CreateTaskDTO) {
        const { title, description } = createTaskDTO;
        const task: Task = {
            id : uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        }

        this.tasks.push(task);
        return task;
    }

    delete(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}
