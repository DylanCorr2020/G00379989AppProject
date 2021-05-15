import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

//added in imports the HttpClient 
//added in import observable to make asynchorous call and get the url 

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //created private variable to get HttpClient
  constructor(private http:HttpClient) { }
//created method to call method from the studnet service and http get request
GetStudentData():Observable<any>{

  return this.http.get('https://jsonblob.com/api/jsonblob/168ebd7b-b570-11eb-8dde-b9b9ef4070ae');
}

GetWeatherData():Observable<any>{
  return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=3c081fcef4a13bee3bd2c287cd44952a');
}

}
