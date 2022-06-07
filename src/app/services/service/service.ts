import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface IService{
    id:string,
    name:string,
    price:number,
    banner_image:string;
    description?:string
    documents?:string[]
}




@Injectable()
export class Service{

    services:IService[] =[
        {   
            id:'first-id' ,
            name:'Gumasta Licence' , 
            description:'Gumasta Licence in Maharashtra Get Instant Renewal Licence' , 
            documents:[ 'Addhar Card' , 'Pan Card' ],
            price:4320 , 
            banner_image:'https://corpseeds.blob.core.windows.net/corpseed/Gumasta%20License%20-%20Registration%20and%20Required%20Documents%20in%20Maharashtra%20-%20Corpseed.jpg'  
        },
        { id:'second-id' , name:'ITR Return' ,
        documents:['Driving licence', 'Bank Statement'],
         description:'File Income Tax Returns ( ITR ) for FY 2021-22 (AY 2022-23) online with ClearTax. ClearTax is fast, safe and easy for ITR E-Filing.' , 
         price:3000 , banner_image:'https://www.91-cdn.com/hub/wp-content/uploads/2021/07/income-tax-return.jpg'},
    ]

    get():Observable<IService[]>{
        return of( this.services )
    }
    
    find( service:IService ){

    }

    findById( id:string ){
       let service = this.services.find( item => item.id == id );
       return of( service );
    }

} 