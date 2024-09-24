import { Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrls: ['./frameworks.component.css']
})
export class FrameworksComponent {
  constructor(public mainSvc:MainService){ 
    
  }
  questions = [
    {
      title: 'What is Angular?',
      answer: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.Angular is a platform and framework for building single-page client applications using HTML and TypeScript.Angular is a platform and framework for building single-page client applications using HTML and TypeScript.Angular is a platform and framework for building single-page client applications using HTML and TypeScript.Angular is a platform and framework for building single-page client applications using HTML and TypeScript.Angular is a platform and framework for building single-page client applications using HTML and TypeScript.Angular is a platform and framework for building single-page client applications using HTML and TypeScript.Angular is a platform and framework for building single-page client applications using HTML and TypeScript.Angular is a platform and framework for building single-page client applications using HTML and TypeScript.Angular is a platform and framework for building single-page client applications using HTML and TypeScript. ',
      likes: 42,
      favorites: 15,
      expanded: false
    },
    {
      title: 'What is a service in Angular?',
      answer: 'A service is a class with a focused purpose. It is typically used to share data, methods, and logic across components.',
      likes: 34,
      favorites: 10,
      expanded: false
    },
    // Add more questions as needed
  ];

  toggleAnswer(question: { expanded: boolean; }) {
    question.expanded = !question.expanded;
  }

  likeQuestion(event: Event, question: { likes: number; }) {
    event.stopPropagation(); // Prevents triggering the toggle when clicking on like button
    question.likes += 1;
  }

  favoriteQuestion(event: Event, question: { favorites: number; }) {
    event.stopPropagation(); // Prevents triggering the toggle when clicking on favorite button
    question.favorites += 1;
  }
}
