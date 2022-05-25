import { environment } from '../../../environments/environment';

export const apiGetAllServices = (search: string) =>
  `${environment.api}/${environment.apiVersion}/services?search=${search}`;