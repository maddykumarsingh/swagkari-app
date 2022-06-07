import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/app/services/service/service';
import { IService } from '../../services/service/service';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  service$:Observable<IService[]>

  constructor( private service:Service ) { }

  ngOnInit() {
    this.service$ = this.service.get();
  }

}
