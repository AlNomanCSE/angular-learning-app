import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }
  getAllCountries(){
    return this.http.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
  }
}