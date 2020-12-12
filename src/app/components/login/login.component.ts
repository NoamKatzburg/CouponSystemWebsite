import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  public client: string;

  public clients: string[] = ['Admin', 'Company', 'Customer'];

  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^.{8,}$'),
  ]);

  public clientFormControl = new FormControl('', Validators.required);

  public loginFormGroup = new FormGroup({
    email: this.emailFormControl,
    password: this.passwordFormControl,
    clientType: this.clientFormControl,
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public login() {
    this.email = this.emailFormControl.value;
    this.passwordFormControl = this.passwordFormControl.value;
    this.client = this.clientFormControl.value;

    switch (this.client) {
      case 'Admin':
        this.router.navigate(['admin']);
        break;
      case 'Company':
        this.router.navigate(['company']);
        break;
      case 'Customer':
        this.router.navigate(['customer']);
        break;
      default:
        this.router.navigate(['**']);
    }
  }
}
