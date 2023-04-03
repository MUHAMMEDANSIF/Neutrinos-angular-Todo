import { Component } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks : Task[] = [];

  constructor(private TaskService:TaskService){

  }

   ngOnInit():void{
    this.TaskService.getTasks().subscribe((task) => {
      this.tasks = task;
    });
   }

   DeleteTask(task:Task){
    this.TaskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    })
   }

   ToggleReminder(task:Task){
    task.reminder = !task.reminder;
    this.TaskService.updateReminder(task).subscribe()
   }

   AddnewTask(task:Task){
    this.TaskService.addnewtask(task).subscribe((task) => {
      this.tasks.push(task);
    })
   }
}
