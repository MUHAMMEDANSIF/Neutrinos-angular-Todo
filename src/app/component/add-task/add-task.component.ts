import { Component,Output,EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

    @Output() onAddtask : EventEmitter<Task> = new EventEmitter();

   text : string ;
   day : string;
   reminder : boolean = false;

   showAddtask:boolean;
  subscription : Subscription;

  constructor(private uiService:UiService){
    this.text = '';
    this.day = '';
    this.showAddtask = false;
    this.subscription = uiService.ontoggle().subscribe(value => {
      this.showAddtask = value;
    });
  }

   onSubmit(){

    if(this.text === '' && this.day === ''){
      alert('please fill the form')
    }
     
     const newtask = {
      text : this.text,
      day : this.day,
      reminder : this.reminder
     }

     this.onAddtask.emit(newtask);

     this.text = '';
     this.day = '';
     this.reminder = false;
   }

}
