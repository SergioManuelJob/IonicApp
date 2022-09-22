import { Component } from '@angular/core';
import { AppUser } from '../interfaces/app-user';
import { AppuserService } from '../services/appuser.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  children: Array<AppUser> = []

  constructor(private appUserService: AppuserService) {
    this.getAllAppUsers();
  }

  getAllAppUsers(){
    this.appUserService.getAllAppUsers().subscribe(data => {
      this.children = data;
    });
  }

}
