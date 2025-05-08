import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../Shared/user.service';
import { Users } from '../../model/users.model';

@Component({
  selector: 'app-register',
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  title: 'Register' = 'Register'


  userObj: Users = {}

  constructor(private userService: UserService) { }

  saveData() {
    this.userService.register(this.userObj)
  }

}