import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Profile } from './profile.modal';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  // Signed in profile
  public activeProfile: Profile;
  // tracks number of created profiles for id purposes.
  private createdProfiles: number;
  private profiles: Profile[] = [
    {
      fname: 'Ami',
      lname: 'Jackson',
      id: 'p1',
      email: 'amiDog20@dogmail.com',
      password: 'amiTheDog',
    },
    {
      fname: 'test',
      lname: 'test',
      id: 'p2',
      email: 'test@test.com',
      password: 'password',
    },
    {
      fname: 'Noah',
      lname: 'Jackson',
      id: 'p3',
      email: 'nojackson99@gmail.com',
      password: 'password',
    },
  ];
  public currentProfile: Profile;

  constructor(private http: HttpClient) {
    this.createdProfiles = this.profiles.length;
  }

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

    // Push new profile to profiles array.
    this.profiles.push({
      fname: fname,
      lname: lname,
      id: stringID,
      email: email,
      password: pass,
    });
  }

  // accept email and password from sign in screen. Search profiles array
  // for profile that matches passed in credentials. Return bool on login
  // success or fail.
  checkCredentials(email: string, pass: string): boolean {
    let matchedProfile: Profile = null;
    console.log(`email is ${email}`);
    console.log(`password is ${pass}`);

    // search profiles[] for element that matches passed in email and pass
    matchedProfile = this.profiles.find(
      (profile) => profile.email == email && profile.password == pass
    );

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
    this.saveActiveProfile(profileToSet);

    return profileToSet;
  }

  // save active profile to local storage
  // load active profile in other pages if null;
  saveActiveProfile(newActiveProfile): void {
    const jsonData = JSON.stringify(newActiveProfile);
    localStorage.setItem('activeProfile', jsonData);

    return;
  }

  loadActiveProfile(): void {
    const jsonData = localStorage.getItem('activeProfile');

    console.log(jsonData);
    console.log(jsonData);
  }

  //! USED TO TEST LAMBDA NOT FOR ACTUAL APP FUNCTION
  // executes lambda http call
  postActiveProfile(): any {
    const url =
      'https://565zbmyxbcjahcgke52a64ktie0jrojz.lambda-url.us-east-2.on.aws/';

    console.log('in test lambda call');

    return this.http.post<string>(url, { ...this.activeProfile });
  }
}
