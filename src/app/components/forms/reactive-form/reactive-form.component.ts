import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [JsonPipe,ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styles: ``
})
export class ReactiveFormComponent {
  studentObj: FormGroup =new FormGroup ({
    firstName: new FormControl("",[Validators.required,Validators.minLength(4)]),
    lastName:  new FormControl(""),
    userName:  new FormControl("some@123"),
    city:  new FormControl(""),
    state:  new FormControl(""),
    zipCode:  new FormControl(""),
});

formVale:any ;

onSubmit(){

  this.formVale = this.studentObj.value;
     console.log(
      this.studentObj.errors
     );
     
}
}
