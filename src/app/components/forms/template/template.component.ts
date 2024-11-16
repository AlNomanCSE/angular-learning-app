import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-template',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './template.component.html',
    styles: ``,
})
export class TemplateComponent {
    studentObj: any = {
        firstName: '',
        lastName: '',
        userName: '',
        city: '',
        district: '',
        zipcode: '',
        isActive: '',
    };
    formValue: any;
    onSubmit() {
        this.formValue = this.studentObj;
        console.log(this.studentObj);
    }
    reSetForm() {
        this.studentObj = {
            firstName: '',
            lastName: '',
            userName: '',
            city: '',
            district: '',
            zipcode: '',
            isActive: '',
        };
    }
}
