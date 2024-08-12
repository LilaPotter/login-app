import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../servicios/user.service';
import { User } from '../Models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit {
  user: User = { name: '', email: '', isActive: true };
  isEditMode = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.userService.getUser(+id).subscribe(user => this.user = user);
    }
  }

  saveUser(): void {
    if (this.isEditMode) {
      this.userService.updateUser(this.user).subscribe(() => this.router.navigate(['/']));
    } else {
      this.userService.createUser(this.user).subscribe(() => this.router.navigate(['/']));
    }
  }
}
