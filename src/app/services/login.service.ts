import { EventEmitter, Injectable, Output } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, authState } from '@angular/fire/auth';
import {map} from 'rxjs/operators'
import  Usuario  from "../models/usuario.model";
//import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()

export class LoginService{
    email: string;

  
  usuario: Usuario;
    @Output()
    usuarioEmitter = new EventEmitter<Usuario>();
   
    constructor(private auth: Auth,
        public afAuth: AngularFireAuth,
        ){
        }
      
setUsuario(nuevoUsuario: Usuario) {
            this.usuario = nuevoUsuario;
            //this.isLogged()
          }



        getAuth(){
          return this.afAuth.authState.pipe(
              map( auth => auth)
          );
      }

 login({ email, password }: any) {
   
          return  signInWithEmailAndPassword(this.auth, email, password);
          }
    
          

 logout() {
           
            return  signOut(this.auth);
          }


          registrarse({ email, password }: any) {
            return createUserWithEmailAndPassword(this.auth, email, password);
          }
        

}





   /*
           login(){
               this.loginService.login(this.email, this.password)
               .then( response => {
                 this.router.navigate(['/']);
               })
               .catch(error =>{
                 this.flashMessages.show(error.message, {
                   cssClass: 'alert-danger', timeout:4000
                 });
               });
             }
                    
   


    login(email: string, password:string){
        return new Promise((resolve,reject)=>{
            this.authService.authState.signInWithEmailAndPassword(email,password)
            .then(datos => resolve(datos),
            error => reject(error)
            )
        })
    }

  getAuth(){
    return this.authService.authState.pipe(
        map( auth => auth)
    );
  }
*/





