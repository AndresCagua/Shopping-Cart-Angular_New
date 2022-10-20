import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {}
  email:string;
  password:string;
  formLogin: FormGroup;
  login:boolean

  constructor(private router: Router,
    private loginService: LoginService) {this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
}

  ngOnInit() {
  }

  login_() {
    //console.log(this.model)
    this.loginService.login(this.formLogin.value)
      .then(response => {
       // console.log(response.operationType);
        console.log(response.user.email);
        this.router.navigate(['/']);
      })
      .catch(error => console.log(error));
  }

}
