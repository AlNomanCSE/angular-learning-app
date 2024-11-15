import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Student {
  name: string;
  age: number;
  roll: number;
  city: string;
  isActive: boolean;
}

@Component({
    selector: 'app-ifelse',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './ifelse.component.html',
    styles: ``,
})
export class IfelseComponent {
    isVisible: boolean = true;

    // Create the students array
    students: any[] = [
        {
            name: 'John Smith',
            age: 20,
            roll: 101,
            city: 'New York',
            isActive: true,
        },
        {
            name: 'Emma Wilson',
            age: 19,
            roll: 102,
            city: 'Los Angeles',
            isActive: true,
        },
        {
            name: 'Michael Johnson',
            age: 21,
            roll: 103,
            city: 'Chicago',
            isActive: false,
        },
        {
            name: 'Sarah Davis',
            age: 20,
            roll: 104,
            city: 'Houston',
            isActive: true,
        },
        {
            name: 'James Brown',
            age: 22,
            roll: 105,
            city: 'Boston',
            isActive: false,
        },
        {
            name: 'Emily Taylor',
            age: 19,
            roll: 106,
            city: 'Seattle',
            isActive: true,
        },
        {
            name: 'Daniel Lee',
            age: 21,
            roll: 107,
            city: 'San Francisco',
            isActive: true,
        },
        {
            name: 'Sophia Martinez',
            age: 20,
            roll: 108,
            city: 'Miami',
            isActive: false,
        },
        {
            name: 'William Anderson',
            age: 22,
            roll: 109,
            city: 'Denver',
            isActive: true,
        },
        {
            name: 'Olivia Garcia',
            age: 19,
            roll: 110,
            city: 'Phoenix',
            isActive: true,
        },
    ];
}
