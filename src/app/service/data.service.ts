import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/employees');
  }

  insertData(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/add-employee', data);
  }
  
  deleteData(id){
    return this.httpClient.delete('http://127.0.0.1:8000/api/delete-employee/'+id);
  }

  getDataById(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/employee/'+id);
  }

  updateData(id,data){
    return this.httpClient.put('http://127.0.0.1:8000/api/update-employee/'+id,data);
  }
}
