import { CommonModule } from '@angular/common';
import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
} from '@angular/core';
import { DemoContentComponent } from '../../components/demo-content/demo-content.component';

@Component({
    selector: 'app-alert',
    standalone: true,
    imports: [CommonModule,DemoContentComponent],
    templateUrl: './alert.component.html',
    styles: ``,
})
export class AlertComponent implements OnChanges, OnInit {
    @Input() message: string = '';

    @Input() type: string = '';

    @Input() bg: string = '';

    //this is the output event and in parents html we will listen to this event by this name (closeAlert)
    @Output() closeAlert = new EventEmitter<string>();
    ngOnChanges(changes: SimpleChanges): void {
        console.log('changes Called');
    }
    ngOnInit(): void {
        console.log('Oninit Called');
    }
    // Add ngDoCheck
    ngDoCheck(): void {
        console.log('ngDoCheck Called');
    }
    onClose() {
        this.closeAlert.emit(this.type); // Emitting the type of alert that was closed
    }
}
