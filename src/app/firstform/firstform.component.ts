

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-firstform',
  templateUrl: './firstform.component.html',
  styleUrls: ['./firstform.component.scss']
})
export class FirstformComponent {
  loanForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loanForm = this.fb.group({
      interestCode: ['', Validators.required],
      interestName: ['', Validators.required],
      effectiveFrom: ['', Validators.required],
      effectiveTo: ['', Validators.required],
      penalInterest: ['', Validators.required],
      penalInterestType: ['', Validators.required],
      calculationMethod: ['', Validators.required],
      rateDerivation: ['', Validators.required],
      interestPeriod: ['', Validators.required],
      enterRate: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.loanForm.valid) {
      console.log('Form Submitted:', this.loanForm.value);
      alert('Loan Interest Created Successfully!');
      this.loanForm.reset(); // Reset form after submission
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
