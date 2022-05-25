import { AppStoreLoadingStatesModel } from '../../core/store/store.model';



export interface IService{
  id:string;
  name:string;
  documents:string[],
  sound_track:string,
  status:boolean
}

export interface ServicesStateModel extends AppStoreLoadingStatesModel {
  listData: IService[];
}

export interface ServicesPageStateModel {
  services: ServicesStateModel;
}
