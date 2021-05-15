import { Component, OnInit } from '@angular/core';
import {StudentService} from '../Services/student.service';
//import service into component


@Component({
  selector: 'app-connacht',
  templateUrl: './connacht.page.html',
  styleUrls: ['./connacht.page.scss'],
})
export class ConnachtPage implements OnInit {
//array called students of type any
students:any = [];
weather:any = [];
  constructor(private service:StudentService) { 

  }
//where component starts 
//make a async call to get data from method GetStudentData
  ngOnInit() {
   this.service.GetStudentData().subscribe( (data)=>{
   this.students = data.students;
   console.log(this.students);
   } );

   this.service.GetWeatherData().subscribe( (data)=>{
   this.weather = data.weather;
   console.log(this.weather);
   });
  }

}
