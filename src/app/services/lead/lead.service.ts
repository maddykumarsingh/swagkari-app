import { Injectable } from "@angular/core";
import { IUser } from "../user/user.service";

export interface ILeads{
    customer:IUser,
}


@Injectable()
export class LeadService{
    leads:ILeads[] = [
        { customer: { user_id:'1234' , name:'Nitin Singh' , contact:'8850628736', email:'nitin.singh@swagkari.com'  } }
    ]
}