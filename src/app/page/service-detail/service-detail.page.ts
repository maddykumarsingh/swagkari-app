import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IService, Service } from 'src/app/services/service/service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.page.html',
  styleUrls: ['./service-detail.page.scss'],
})
export class ServiceDetailPage implements OnInit {


  service$:Observable<IService>

  constructor( private route:ActivatedRoute , private service:Service ) { 
   
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('service_id')!;
    this.service$ = this.service.findById( id );
  }

  shareDocumentList(){

  }

}
