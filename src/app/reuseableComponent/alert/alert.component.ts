import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
} 
