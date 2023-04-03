import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddnewtask: boolean = false;
  private subject = new Subject<any>();

  constructor() {
  }
  toggleAddtask() : void {
    this.showAddnewtask = !this.showAddnewtask;
    this.subject.next(this.showAddnewtask);
  }

  ontoggle() : Observable<any>{
    return this.subject.asObservable();
  }
}
