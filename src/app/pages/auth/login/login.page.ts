import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { AuthAction } from '../../../core/auth-guard/auth-guard.actions';
import { OtpPage } from '../otp/otp.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: FormGroup;

  constructor( 
      private store: Store, 
      private navController: NavController,
      private platform: Platform,
      private modalCtrl: ModalController
  ) {}

  async onLogin() {
    if (this.login.valid) {

      if( ! this.login.value.password ){
          let modal =  await this.modalCtrl.create({
            component:OtpPage,
            componentProps:{
              email: this.login.value.email
            },
          })

          await modal.present();

          const { data } = await modal.onWillDismiss();
          if( data.verified ){
            const randomUserId = Math.floor(Math.random() * 100).toString();
            this.store.dispatch(new AuthAction.Login(randomUserId));
          }

          return
      }

      const randomUserId = Math.floor(Math.random() * 100).toString();
      this.store.dispatch(new AuthAction.Login(randomUserId));
    }
  }

  ngOnInit(): void {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [ Validators.minLength(6), Validators.maxLength(150)]),
    });
  }
}
