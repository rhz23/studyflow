import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  login(event: Event) {
    event.preventDefault();
    // Perform login logic here, e.g., send login request to server
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    // Reset the form
    this.username = '';
    this.password = '';
  }


}
