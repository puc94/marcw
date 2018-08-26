import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService } from '../../_services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

	registerForm: FormGroup;
	loading = false;
	submitted = false;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private userService: UserService,
		private alertService: AlertService) { }

	ngOnInit() {
		this.registerForm = this.formBuilder.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
		})
	}

	// conveience getter for easy acccess to form fields
	get f() { return this.registerForm.controls; }

	onSubmit() {
		this.submitted = true;

		// stop here if form is invalid
		if (this.registerForm.invalid) {
			return;
		}

		this.loading = true;
		this.userService.register(this.registerForm.value)
			.pipe(first())
			.subscribe(
				data => {
					this.alertService.success('Registration success', true);
					this.router.navigate(['/auth/login']);
				},
				error => {
					this.alertService.error(error);
					this.loading = false;
				});
	}
}
