import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.page.html',
  styleUrls: ['./create-profile.page.scss'],
})
export class CreateProfilePage implements OnInit {
  isSubmitted = false;
  createProfileForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public navController: NavController) { }

  ngOnInit() {
    this.createProfileForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.createProfileForm.valid) {
      console.log("Please provide all required inputs")
      return false;
    } else {
      console.log(this.createProfileForm.value)
    }
    // Navigate back to home page, wipes nav stack, home page is new root.
    this.navController.navigateRoot('/');
  }

  get errorControl() {
    return this.createProfileForm.controls;
  }
}
