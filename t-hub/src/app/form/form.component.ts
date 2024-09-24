import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
hasSolution: boolean = false;
res:any;

constructor(private mainSvc:MainService) {
  
}
  QuestionForm = new FormGroup({
    question: new FormControl('',Validators.required),
    framework: new FormControl('',Validators.required),
    priority: new FormControl('',Validators.required),
    solution: new FormControl('')
  });

  onSubmit() {
   this.mainSvc.QuestionDetails = this.QuestionForm.value;
   this.mainSvc.questions.push(this.mainSvc.QuestionDetails);
   this.QuestionForm.reset();  
  }
}
