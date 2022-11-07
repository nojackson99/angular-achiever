import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { NavController } from '@ionic/angular';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  signInForm: FormGroup;
  isSubmitted = false;
  // set to true when sign in fails, notifies user on sign in page
  signInFailed: boolean = null;

  constructor(
    public formBuilder: FormBuilder,
    public navController: NavController,
    private profileService: ProfileService) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  // submit form values
  // return bool to notify if form was submitted successfully
  submitForm(): boolean {
    this.isSubmitted = true;
    if (!this.signInForm.valid) {
      console.log("Please provide all required inputs")
      return false;
    }

    this.attemptSignIn();
    return true;
  }

  // calls checkCredentials in ProfileService to attempt sign-in
  // returns bool to notify if sign in succeeded or failed.
  attemptSignIn(): boolean {
    const signInSucceeded = this.profileService
      .checkCredentials(
        this.signInForm.value.email,
        this.signInForm.value.password);

    //sign in was successful
    if (signInSucceeded) {
      //route to signed-in-landing page
      this.navController.navigateForward('/signed-in-home')

      return signInSucceeded
    }
    //sign in failed
    this.signInFailed = !signInSucceeded;
    return signInSucceeded;
  }

  get errorControl() {
    return this.signInForm.controls;
  }
}
