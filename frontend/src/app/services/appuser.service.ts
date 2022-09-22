import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppUser } from '../interfaces/app-user';

@Injectable({
  providedIn: 'root'
})
export class AppuserService {

  endpoint: string = "http://localhost:8080/appuser"

  constructor(private httpClient: HttpClient) { }

  getAllAppUsers(){
    return this.httpClient.get<Array<AppUser>>(this.endpoint);
  }
}
