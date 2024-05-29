import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formForm: FormGroup;

  constructor(private fb: FormBuilder, private Router: Router) {
    this.formForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formForm.valid) {
      console.log(this.formForm.value);
      const { fullName, email, phone, username, password, address } = this.formForm.value;
      console.log('Full Name:', fullName);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Username:', username);
      console.log('Password:', password);
      console.log('Address:', address);
    } else {
      console.log('Form is invalid');
    }
  }
}
