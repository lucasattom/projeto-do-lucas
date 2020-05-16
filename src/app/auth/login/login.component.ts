import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onGoogleLogin() {
    this.authService.loginGoogle();
  }

  onSubmit(form: NgForm) {
    this.authService.login(form.value.email, form.value.senha);
  }
}
