import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  message = new BehaviorSubject('');
  sharedMessage= this.message.asObservable();
  setMessage(msg) {this.message.next(msg);}
}
