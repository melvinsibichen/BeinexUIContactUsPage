import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormdataService } from 'src/app/services/formdata.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-be-formlabels',
  templateUrl: './be-formlabels.component.html',
  styleUrls: ['./be-formlabels.component.scss']
})
export class BeFormlabelsComponent {
  mainForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private formDataService: FormdataService) {
    this.mainForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern('[0-9]+')]],
      company: [""],
      role: [""],
      country: [""],
      message: ["", Validators.required],
      message2: ["", Validators.required],

    });
  }

  onSubmit() {
    if (this.mainForm.valid) {
      // Form is valid, proceed with submission
      console.log('Form Values:', this.mainForm.value);
      // Set form data in the service
      this.formDataService.setFormData(this.mainForm.value);
      // Reset the form
      this.mainForm.reset();
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Form submitted successfully.',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Form is invalid. Please check the fields.',
      });
    }
  }

}

