import { Todo, User, users } from './../../DUMMY-USERS';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TaskComponent } from './task/task.component';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnChanges {
  @Input({ required: true }) id: number | undefined;
  users: User[] = users; // Ensure this is always initialized
  name: string = 'undefined'; // Initialize with default
  todos: Todo[] = []; // Initialize with an empty array

  // Automatically updates when @Input id changes
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'] && this.id !== undefined) {
      // Safely check if users is defined
      const selectedUser = this.users?.find((user) => user.id === this.id);
      this.todos = selectedUser?.todos || [];
      this.name = selectedUser?.name || 'undefined';
    }
  }
}
