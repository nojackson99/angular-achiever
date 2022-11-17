import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  //
  activeProfileUpdated = new Subject<Profile>();
  // Signed in profile
  public activeProfile: Profile;
  // Tracks number of created profiles for id purposes.
  // [] todo: replace references to this var with get numberOfProfiles()
  private createdProfiles: number = 0;
  // Source of truth for locally stored profiles
  private profiles: Profile[] = null;

  constructor(private http: HttpClient) {
    this.profiles = this.savedProfiles;
    this.createdProfiles = this.numberOfProfiles;
  }

  // add profile to profiles array
  // update local storage profile data
  addProfile(fname: string, lname: string, email: string, pass: string) {
    console.log('current profiles:' + this.createdProfiles);
    console.log(email + ' ' + pass);

    // Update number of created profiles.
    this.createdProfiles++;

    // Construct string ID from incremented createdProfiles.
    // ex: if created Profiles started at 1 increment to 2 and concat with 'p'
    // ex: stringID will be 'p2'.
    const stringID: string = 'p' + this.createdProfiles.toString();
    console.log(stringID);

    if (this.profiles) {
      this.profiles.push({
        fname: fname,
        lname: lname,
        id: stringID,
        email: email,
        password: pass,
      });
    } else {
      this.profiles = [
        {
          fname: fname,
          lname: lname,
          id: stringID,
          email: email,
          password: pass,
        },
      ];
    }
    // Push new profile to profiles array.

    // prep and set current profiles data to local storage
    const jsonData = JSON.stringify(this.profiles);
    localStorage.setItem('savedProfiles', jsonData);
  }

  get savedProfiles(): Profile[] {
    const jsonData = localStorage.getItem('savedProfiles');
    return JSON.parse(jsonData);
  }

  // accept email and password from sign in screen. Search profiles array
  // for profile that matches passed in credentials. Return bool on login
  // success or fail.
  checkCredentials(email: string, pass: string): boolean {
    let matchedProfile: Profile = null;
    console.log(`email is ${email}`);
    console.log(`password is ${pass}`);

    if (this.createdProfiles) {
      // search profiles[] for element that matches passed in email and pass
      matchedProfile = this.profiles.find(
        (profile) => profile.email == email && profile.password == pass
      );
    } else {
      return false;
    }

    // if matching profile was found matchedProfile will not be null
    // set as active profile and inform sign-in.page by returning true
    if (matchedProfile != null) {
      this.activeProfile = this.setActiveProfile(matchedProfile);
      console.log('sign in succeeded');
      console.log(this.activeProfile);
      return true;
    } else {
      console.log('credentials did not match');
      return false;
    }
  }

  // set activeProfile for Profile Service
  setActiveProfile(profileToSet: Profile): Profile {
    // save activeProfile to local storage
    this.postActiveProfile(profileToSet);

    return profileToSet;
  }

  // save active profile to local storage
  // load active profile in other pages if null;
  postActiveProfile(newActiveProfile): void {
    const jsonData = JSON.stringify(newActiveProfile);
    localStorage.setItem('activeProfile', jsonData);

    return;
  }

  // Load active profile from cache or local storage
  get ActiveProfile(): Profile {
    if (this.activeProfile == null) {
      const jsonData = localStorage.getItem('activeProfile');
      this.activeProfile = JSON.parse(jsonData);
      return this.activeProfile;
    }
    return this.activeProfile;
  }

  get numberOfProfiles(): number {
    if (!this.profiles) {
      return 0;
    }

    return this.profiles.length;
  }

  //! USED TO TEST LAMBDA NOT FOR ACTUAL APP FUNCTION
  // executes lambda http call
  // postActiveProfile(): any {
  //   const url =
  //     'https://565zbmyxbcjahcgke52a64ktie0jrojz.lambda-url.us-east-2.on.aws/';

  //   console.log('in test lambda call');

  //   return this.http.post<string>(url, { ...this.activeProfile });
  // }
}
