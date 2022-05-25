import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { IService } from './services.model';

@Component({
  selector: 'app-services',
  templateUrl: 'services.page.html',
  styleUrls: ['services.page.scss'],
})
export class ServicesPage implements OnInit {
  @ViewChild(IonContent) ionContent: IonContent;

  explores: any[] = [
    { id: 'friends_title', icon: 'people', color: 'danger', link: 'friends' },
    { id: 'communities_title', icon: 'people-circle', color: 'warning', link: 'communities' },
    { id: 'music_title', icon: 'musical-notes', color: 'primary', link: 'music' },
  ];

  services:any[] = []

  constructor(private store: Store, private navController: NavController) {}

  openServicePage(explore) {
    this.navController.navigateForward(explore.link);
  }

  async ngOnInit() {}

  openServiceDetail( service:IService ){
    this.navController.navigateForward(`/service-detail/${service.id}`)
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.services = [ { id:'' , name:'Gst Registration' },
      { id:'' , name:'Gumasta Registration' },
      { id:'' , name:'Pan Card Registration' }]
    }, 2000);
  }

  ionViewDidLeave() {}
}
