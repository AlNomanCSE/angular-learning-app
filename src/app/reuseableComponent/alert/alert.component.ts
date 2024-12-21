import { CommonModule } from '@angular/common';
import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styles: ``
})
export class AlertComponent {
  @Input() message:string = '';

  @Input() type:string = '';

  @Input() bg:string = '';


  //this is the output event and in parents html we will listen to this event by this name (closeAlert)
  @Output() closeAlert = new EventEmitter<string>();

  onClose() {
    this.closeAlert.emit(this.type); // Emitting the type of alert that was closed
  }
} 
