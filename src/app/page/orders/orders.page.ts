import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ILeads, LeadService } from 'src/app/services/lead/lead.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  orders$

  constructor( private service:LeadService ) { }

  ngOnInit() {
    this.orders$ = this.service.get();
  }

}
