import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  title = 'ToDo List'

  showAddtask:boolean;
  subscription : Subscription;

  constructor(private uiService:UiService){
    this.showAddtask = false;
    this.subscription = uiService.ontoggle().subscribe(value => {
      this.showAddtask = value;
    });
  }

  togglebtn(){
    this.uiService.toggleAddtask();
  }
}
