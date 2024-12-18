import {
    DatePipe,
    JsonPipe,
    TitleCasePipe,
    UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipe/na.pipe';

@Component({
    selector: 'app-pipecomponent',
    standalone: true,
    imports: [UpperCasePipe, TitleCasePipe, DatePipe, JsonPipe,NaPipe],
    templateUrl: './pipecomponent.component.html',
    styles: ``,
})
export class PipecomponentComponent {
    firstName: string = 'abdullah al noman';
    currentDate: Date = new Date();
    student: any = {
        name: 'noman',
        city: 'Khulna',
        empId: 323,
    };
    again: any = 12;
}
