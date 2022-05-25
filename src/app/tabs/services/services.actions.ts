import { apiGetAllServices } from "./services.constant";
import { IService } from "./services.model";


export namespace ServiceAction{
    export class FetchServices {
        static readonly type = '[Service Tab] Fetch service';
        constructor(public search: string, public api: string = apiGetAllServices('')) {
            this.api = apiGetAllServices( search );
        }
    }

    export class FetchMessagesSuccess {
        static readonly type = '[Service Tab] Fetch service success';
        constructor(public listData: IService[]) {}
    }
    
    export class FetchMessagesFail {
        static readonly type = '[Service Tab] Fetch service fail';
        constructor(public error: string) {}
    }
}
