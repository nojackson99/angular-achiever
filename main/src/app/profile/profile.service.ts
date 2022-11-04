import { Injectable } from '@angular/core';
import { Profile } from './profile.modal';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // tracks number of created profiles for id purposes.
  private createdProfiles: number;
  private profiles: Profile[] = [
    {
      id: 'p1',
      email: 'amiDog20@dogmail.com',
      password: 'amiTheDog'
    }
  ]
  public currentProfile: Profile;

  constructor() {
    this.createdProfiles = this.profiles.length;
  }

  addProfile(email, pass) {
    console.log('current profiles:' + this.createdProfiles);
    console.log(email + ' ' + pass);

    // Update number of created profiles.
    this.createdProfiles++;

    // Construct string ID from incremented createdProfiles.
    // ex: if created Profiles started at 1 increment to 2 and concat with 'p'
    // ex: stringID will be 'p2'.
    const stringID: String = 'p' + this.createdProfiles.toString();
    console.log(stringID);

    // Push new profile to profiles array.
    this.profiles.push(
      {
        id: '',
        email: email,
        password: pass
      }
    )
  }
}
