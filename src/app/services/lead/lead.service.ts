import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IUser } from "../user/user.service";

export interface ILeads{
    customer:IUser,
    service_id:string,
    created_at:Date,
    status:'initialised' | 'processing' | 'finished'
}


@Injectable()
export class LeadService{


    leads$:BehaviorSubject<ILeads[]> = new BehaviorSubject<ILeads[]>(null);

    private leads:ILeads[] = [
        { 
            customer: { user_id:'1234' , name:'Nitin Singh' , contact:'8850628736', email:'nitin.singh@swagkari.com'  } ,
            service_id:'some-id',
            created_at:new Date() ,
            status:'initialised'
        }
    ]


    add( leads:ILeads  ){
        this.leads.push( leads );
        this.leads$.next(this.leads);
    }

    get( ){
       return this.leads$.next( this.leads ); 
    }
}