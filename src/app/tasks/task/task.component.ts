import { Component, Input } from '@angular/core';
import { Todo } from '../../../DUMMY-USERS';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) todo: Todo | undefined;
}
