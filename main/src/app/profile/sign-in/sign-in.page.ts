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

  submitForm() {
    this.isSubmitted = true;
    if (!this.signInForm.valid) {
      console.log("Please provide all required inputs")
      return false;
    }
  }

  get errorControl() {
    return this.signInForm.controls;
  }
}
