import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  loginPassword = '';
  isRegistered = false;
  showEmailField = true;
  showPasswordField = false;

  constructor(private _http: HttpService) { }

  ngOnInit() {
  }

  onEmail() {
    this._http
      .getByEmail(this.user.email)
      .subscribe(res => {
        console.log('test', res);
        if (res.toString().length > 0) {
          this.isRegistered = true;
          this.loginPassword = res['password'];
        }
      });

    this.showPasswordField = true;
    this.showEmailField = false;
  }

  onPassword() {
    if (this.isRegistered) {
      return this._http.validate(this.user).subscribe(data => {
        console.log(data);
      });
    } else {
      return this._http.createUser(this.user).subscribe(data => {
        console.log(data);
      });
    }
  }

}
