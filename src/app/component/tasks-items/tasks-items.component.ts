import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-items',
  templateUrl: './tasks-items.component.html',
  styleUrls: ['./tasks-items.component.css']
})
export class TasksItemsComponent {

   @Input() task:Task;
   @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter();
   @Output() onToggleReminder : EventEmitter<Task> = new EventEmitter();
   faTimes = faTimes;

    constructor(){
      this.task = {id:0,text:'',day:'',reminder:true}
    }

    onDelete(){
      this.onDeleteTask.emit(this.task);
    }

    onToggle(){
      this.onToggleReminder.emit(this.task);
    }
}
