import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import Usuario from 'src/app/models/usuario.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn: boolean;
 
  authStateSubs: any;
 loggedInUser: string;
   usuario:Usuario;
   permitirRegistro: boolean;
  constructor(private loginService:LoginService,
    private router: Router,
    public auth: AngularFireAuth) { }

  ngOnInit() { this.loginService.getAuth().subscribe( auth => {
    if(auth){
      this.isLoggedIn = true;
      this.loggedInUser = auth.email;
    }
    else{
      this.isLoggedIn = false;
    }
  });
  }

  onClickOut() {
    this.loginService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }



}
