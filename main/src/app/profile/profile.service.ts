import { Injectable } from '@angular/core';
import { Profile } from './profile.modal';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // Signed in profile
  public activeProfile: Profile;
  // tracks number of created profiles for id purposes.
  private createdProfiles: number;
  private profiles: Profile[] = [
    {
      id: 'p1',
      email: 'amiDog20@dogmail.com',
      password: 'amiTheDog'
    },
    {
      id: 'p2',
      email: 'test@test.com',
      password: 'password'
    }
  ]
  public currentProfile: Profile;

  constructor() {
    this.createdProfiles = this.profiles.length;
  }

  addProfile(email: string, pass: string) {
    console.log('current profiles:' + this.createdProfiles);
    console.log(email + ' ' + pass);

    // Update number of created profiles.
    this.createdProfiles++;

    // Construct string ID from incremented createdProfiles.
    // ex: if created Profiles started at 1 increment to 2 and concat with 'p'
    // ex: stringID will be 'p2'.
    const stringID: string = 'p' + this.createdProfiles.toString();
    console.log(stringID);

    // Push new profile to profiles array.
    this.profiles.push(
      {
        id: stringID,
        email: email,
        password: pass
      }
    )
  }

  checkCredentials(email: string, pass: string): boolean {
    let matchedProfile: Profile = null;
    console.log(`email is ${email}`);
    console.log(`password is ${pass}`)

    // search profiles[] for element that matches passed in email and pass
    matchedProfile = this.profiles.find(profile =>
      (profile.email == email) && (profile.password == pass))

    // if matching profile was found matchedProfile will not be null
    // set as active profile and inform sign-in.page by returning true
    if (matchedProfile != null) {
      this.activeProfile = this.setActiveProfile(matchedProfile)
      console.log("sign in succeeded")
      console.log(this.activeProfile);
      return true;
    } else {
      console.log("credentials did not match");
      return false;
    }
  }

  setActiveProfile(profileToSet: Profile): Profile {
    return profileToSet;
  }

}
