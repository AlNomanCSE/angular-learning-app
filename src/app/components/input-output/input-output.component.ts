import { Component ,OnChanges} from '@angular/core';
import { AlertComponent } from '../../reuseableComponent/alert/alert.component';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './input-output.component.html',
  styles: ``
})
export class InputOutputComponent {
  message:string = 'This is a message for Error';
  close:boolean = false;
  updateMessage() {
    this.message = 'Updated message';
  }
}
