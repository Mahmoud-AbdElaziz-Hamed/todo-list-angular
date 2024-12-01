import { User, users } from './../DUMMY-USERS';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-list-angular';
  selectedUserId: number | undefined;
  allUsers: User[] = users;
select: any;
  onSelectUser(id: number) {
    this.selectedUserId = id;
  }
}
