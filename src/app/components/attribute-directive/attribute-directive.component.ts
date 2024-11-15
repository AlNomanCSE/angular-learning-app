import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-attribute-directive',
    standalone: true,
    imports: [CommonModule,RouterLink],
    templateUrl: './attribute-directive.component.html',
    styles: ``,
})
export class AttributeDirectiveComponent {
    divBgColor: string = 'bg-lime-400';
    isActrive =false;
    chnageBg() {
        this.divBgColor = 'bg-red-600';
    }
}
