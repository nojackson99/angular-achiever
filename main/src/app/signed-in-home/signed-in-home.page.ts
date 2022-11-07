import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-signed-in-home',
  templateUrl: './signed-in-home.page.html',
  styleUrls: ['./signed-in-home.page.scss'],
})
export class SignedInHomePage implements OnInit {
  activeProfileEmail: string = null;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.activeProfileEmail = this.profileService.activeProfile.email
  }

}
