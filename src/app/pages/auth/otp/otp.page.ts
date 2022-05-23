import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit , OnDestroy {

  otp:FormControl

  constructor( private modalController:ModalController ) { }

  ngOnInit() {
    this.otp = new FormControl('');
  }

  resendOtp(){
    alert('OTP resended to your registered number or email');
  }

  check(){
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.modalController.dismiss({
        'verified': true
      });
  }

  ngOnDestroy(): void {
     this.modalController.dismiss({
       'verified':false
     })
  }

  

}
