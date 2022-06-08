import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, FormArray , Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LeadService } from 'src/app/services/lead/lead.service';
import { IService, Service } from 'src/app/services/service/service';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.page.html',
  styleUrls: ['./lead.page.scss'],
})
export class LeadPage implements OnInit {

  service$:Observable<IService>

  leadForm:FormGroup



  constructor( 
    private route:ActivatedRoute , private formBuilder:FormBuilder , 
    private service:Service,
    private leadService:LeadService
  ) { }

  ngOnInit():void {
    const id = this.route.snapshot.paramMap.get('service_id')!;
    this.service$ = this.service.findById( id );


      this.leadForm = this.formBuilder.group({
        name:['' , Validators.required ],
        email:['' , [ Validators.email , Validators.required ] ],
        contact:[''],
        rate_quoted:['' , Validators.pattern('[0-9]')],
        remarks:[''],
        documents:this.formBuilder.array([])
      })
  }

  save():void{
    console.log( this.leadForm.valid );
  }

  get name(){
    return this.leadForm.get('name');
  }

  get email(){
    return this.leadForm.get('email');
  }

  get contact(){
    return this.leadForm.get('contact');
  }

  get documentForms(){
    return this.leadForm.get('documents') as FormArray
  }

  get rate_quoted(){
    return this.leadForm.get('rate_quoted');
  }

  addDocuments(){
    const document = this.formBuilder.group({
      name:[]
    })

    this.documentForms.push( document );
  }

  deleteDocument( index ){
    this.documentForms.removeAt(index)
  }

}
