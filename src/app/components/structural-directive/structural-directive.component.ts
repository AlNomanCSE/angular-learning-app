import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-structural-directive',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './structural-directive.component.html',
    styles: ``,
})
export class StructuralDirectiveComponent {
    constructor(private router: Router) {}
    goToAttribute() {
        this.router.navigateByUrl('atti');
    }
    isDiv1Visiable: boolean = true;
    isDiv2Visible: boolean = true;
    num1: string = '';
    num2: string = '';
    isActive: boolean = false;
    selectedState: string = '';
    cityArray: string[] = ['Dhaka', 'Delhi', 'Katmandu'];
    toggleDiv2() {
        this.isDiv2Visible = !this.isDiv2Visible;
        console.log('Button Cliceked');
    }
    showDiv1() {
        this.isDiv1Visiable = true;
    }
    hideDiv1() {
        this.isDiv1Visiable = false;
    }
}
