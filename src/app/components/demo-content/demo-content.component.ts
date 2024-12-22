import { Component,AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-demo-content',
  standalone: true,
  imports: [],
  templateUrl: './demo-content.component.html',
  styles: ``
})
export class DemoContentComponent implements AfterContentInit {

  ngAfterContentInit() {
    console.log('DemoContentComponent ngAfterContentInit');
  }
   
}
