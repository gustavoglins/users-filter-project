import { Component } from '@angular/core';
import { UsersList } from '../../data/users-list';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  displayedColumns: string[] = ['name', 'date', 'status']
  usersList: IUser[] = UsersList;

  onUserSelected(user: IUser){
    console.log('user ', user)
  }
}
