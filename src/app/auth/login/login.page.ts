import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  loginForm:FormGroup

  constructor( 
        private router:Router , 
        private auth:AuthService ,
        private loadingCtrl:LoadingController,
        private alertCtrl:AlertController,
        private fb:FormBuilder
  ) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:['' , [ Validators.required , Validators.email ]],
      password:['' , [ Validators.required ]]
    })
  }



  async login(){


    if( this.loginForm.invalid ){
      this.loginForm.markAllAsTouched();
      return
    }

    const loading = await this.loadingCtrl.create({ message:'Auhtenticating.....' });

    loading.present();

    this.auth.login(this.loginForm.value).
    pipe(
      tap( () => loading.dismiss() )
    ).
    subscribe(
      (isLoggedIn:Boolean) => {
        if( isLoggedIn )  this.router.navigate(['/tabs']);
      },
      async ( error:HttpErrorResponse ) => {
        loading.dismiss();
        const alert = await this.alertCtrl.create({ message:'Invalid email or password' , buttons:['Ok'] });
        alert.present();
      }
    )
   
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

}
