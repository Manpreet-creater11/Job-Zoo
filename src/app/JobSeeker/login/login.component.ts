import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title : 'login' = 'login'

  userObj:any={
    email:'',
    password:''
  }

  submit(){
    alert(this.userObj.email);
    alert(this.userObj.password);
  }
}
