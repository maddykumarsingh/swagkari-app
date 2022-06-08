import { Component, OnInit } from '@angular/core';
import { IProfileUser,  UserService } from 'src/app/services/user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user$:Observable<IProfileUser>

  constructor( private service:UserService ) { }

  ngOnInit() {
    this.user$ = this.service.get();
  }

}
