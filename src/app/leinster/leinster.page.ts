import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leinster',
  templateUrl: './leinster.page.html',
  styleUrls: ['./leinster.page.scss'],
})
export class LeinsterPage implements OnInit {

  constructor() { }

  //public variables 
  public weight:number;
  public height:number;
  public bmi:number = 0;


  ngOnInit() {
  }

//method for calculating BMI
  calculateBMI(){
   
    this.bmi = this.weight * (this.height * this.height);

  }

}
