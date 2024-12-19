import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-template-form',
    standalone: true,
    imports: [FormsModule,JsonPipe,CommonModule],
    templateUrl: './template-form.component.html',
    styles: ``,
})
export class TemplateFormComponent {
    studentObj: any = {
        firstName: '',
        lastName: '',
        userName: '',
        city: '',
        state: '',
        zipCode: '',
    };

    onSubmit(){
         console.log(
          this.studentObj
         );
         
    }
}
