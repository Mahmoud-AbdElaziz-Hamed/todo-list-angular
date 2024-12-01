import { Todo, users, User } from './../../DUMMY-USERS';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user: User | undefined;
  @Output() select = new EventEmitter<number>();

  get id(): number | undefined {
    return this.user?.id;
  }

  get name(): string | undefined {
    return this.user?.name;
  }

  get image(): string | undefined {
    return this.user?.profileImage;
  }

  get todoList(): Todo[] | undefined {
    return this.user?.todos;
  }

  clickHandler() {
    this.select.emit(this.id);
    console.log(this.id);
  }
}
