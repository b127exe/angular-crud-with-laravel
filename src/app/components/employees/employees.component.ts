import { Component } from '@angular/core';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

 employees:any;
 employee = new Employee();

 constructor(private dataService:DataService){ }

 ngOnInit() : void {
  this.getEmployeeData();
}

 getEmployeeData(){
   this.dataService.getData().subscribe(res => {
     this.employees = res;
   });  
 }

 insertData(){
   this.dataService.insertData(this.employee).subscribe(res => {
     this.getEmployeeData();
   });
 }

 deleteData(id){
   this.dataService.deleteData(id).subscribe(res => {
    this.getEmployeeData();
   });
 }

}
