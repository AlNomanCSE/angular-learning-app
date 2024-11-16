import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-reactive',
    standalone: true,
    imports: [ReactiveFormsModule,JsonPipe,CommonModule],
    templateUrl: './reactive.component.html',
    styles: ``,
})
export class ReactiveComponent {
    studentForm: FormGroup = new FormGroup({
        firstName: new FormControl("",[Validators.required,Validators.minLength(3)]),
        lastName: new FormControl(""),
        userName: new FormControl("",[Validators.email]),
        city: new FormControl(""),
        state: new FormControl(""),
        zipcode: new FormControl(""),
        isActive: new FormControl(""),
    });
    formValue: any;
    onSubmit() {
        this.formValue = this.studentForm.value;
        console.log(this.formValue);
        
    }
    reSetForm() {}
}
