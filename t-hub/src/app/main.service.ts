import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }
  
 isUserLoggedIn:boolean = false

  QuestionDetails :any;

  public questions:any = [];

}
