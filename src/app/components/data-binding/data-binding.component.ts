import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-data-binding',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './data-binding.component.html',
    styles: ``,
})
export class DataBindingComponent {
    courseName: string = 'Java Spring with Angular';
    inputType = 'checkbox';
    rollNo: number = 123;
    myClassName: string = 'bg-red-600';
    isBangladeshi: boolean = false;
    currentDate: Date = new Date();
    firstName = signal('Abdullah Al Noman');
    showAlert(message: string) { 
        alert(message);
    }

    changeName() {
        this.courseName = 'REACT JS';

        //change state
        this.firstName.set("Noman")
    }
}
