import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../service/department.service';

@Component({
    selector: 'app-api-integration',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './api-integration.component.html',
    styles: ``,
})
export class ApiIntegrationComponent implements OnInit {
    countryList: any[] = [];
    errorMessage: string | null = null;

    constructor(private departSrv: DepartmentService) {}
    ngOnInit(): void {
        this.getCountries();
    }
    getCountries() {
        this.departSrv.getAllCountries().subscribe(
            (result: any) => {
                this.countryList = result.data.map((item: any) => ({
                    id: item['ID Nation'],
                    nation: item['Nation'],
                    id_year: item['ID Year'],
                    year: item['Year'],
                    population: item['Population'],
                    slug_nation: item['Slug Nation'],
                }));
                this.errorMessage = null; // Clear any previous error message
            },
            (error) => {
                console.error('Error fetching data:', error);
                this.errorMessage =
                    'Error fetching data. Please try again later.';
            }
        );
    }
}
