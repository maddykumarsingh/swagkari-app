import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IService, Service } from 'src/app/services/service/service';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.page.html',
  styleUrls: ['./lead.page.scss'],
})
export class LeadPage implements OnInit {

  service$:Observable<IService>

  constructor( private route:ActivatedRoute , private service:Service ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('service_id')!;
    this.service$ = this.service.findById( id );
  }

}
