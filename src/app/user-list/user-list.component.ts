import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicios/user.service';
import { User } from '../Models/user.model';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => this.loadUsers());
  }

  suspendUser(id: number): void {
    this.userService.suspendUser(id).subscribe(() => this.loadUsers());
  }
}
