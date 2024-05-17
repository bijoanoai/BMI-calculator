import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-bmi-checkdiet',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './bmi-checkdiet.component.html',
  styleUrl: './bmi-checkdiet.component.css'
})
export class BmiCheckdietComponent {

  bmi_status:any
  constructor(){
    this.bmi_status=localStorage.getItem("bmi_status")
    console.log(this.bmi_status);
  }
  
}
