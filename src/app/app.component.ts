import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { BmiCheckdietComponent } from './bmi-checkdiet/bmi-checkdiet.component';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BmiCalculatorComponent,FormsModule,RouterLink,HttpClientModule,BmiCheckdietComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  constructor(private router:Router){}

  bmi_weight:any
  bmi_height:any
  bmi_inche:any
  bmi_feet:any
  bmi_cm:any
  bmi_pounds:any
  bmi_kg:any
  bmi_result:any

  cm_to_m:any
  cm_to_feet:any
  feet_to_inch:any
  kg_to_pounds:any
  feet:any
  bmi_status:any

  bmi_calculate(bmiform:any){
    this.bmi_weight=bmiform.weight
    this.bmi_height=bmiform.height
    this.bmi_inche=bmiform.inche
    this.bmi_feet=bmiform.height_type
    this.bmi_cm=bmiform.height_type
    this.bmi_kg=bmiform.weight_type
    this.bmi_pounds=bmiform.weight_type
    
    if(this.bmi_kg=='kg' && this.bmi_cm=='cm'){
      this.cm_to_m=this.bmi_height/100
      this.bmi_result=this.bmi_weight/(this.cm_to_m*this.cm_to_m)
    console.log('bmi_result',this.bmi_result);
    }else if(this.bmi_pounds=='pounds' && this.bmi_feet=='feet'){
      this.feet_to_inch=this.bmi_height*12
      this.feet=parseInt(this.feet_to_inch)+parseInt(this.bmi_inche)
      this.bmi_result=703*(this.bmi_weight/(this.feet*this.feet))
      console.log(this.bmi_result);
    }else if(this.bmi_pounds=='pounds' && this.bmi_cm=='cm'){
      this.cm_to_feet=this.bmi_height*0.0328084
      this.bmi_result=703*(this.bmi_weight/(this.cm_to_feet*this.cm_to_feet))
      console.log(this.bmi_result);
    } 
    else if(this.bmi_kg=='kg' && this.bmi_feet=='feet'){
      this.kg_to_pounds=this.bmi_weight*2.2
      this.feet_to_inch=this.bmi_height*12
      this.feet=parseInt(this.feet_to_inch)+parseInt(this.bmi_inche)
      this.bmi_result=703*(this.bmi_weight/(this.feet*this.feet))
      console.log(this.bmi_result);
    }
    if(this.bmi_result<=18.4){
      this.bmi_status='UNDER WEIGHT'
    }else if(this.bmi_result>=18.5 && this.bmi_result<=24.9){
      this.bmi_status='NORMAL'
    }else if(this.bmi_result>=25.0 && this.bmi_result<=39.9){
      this.bmi_status='OVER WEIGHT'
    }else{
      this.bmi_status='OBESE'
    }
  }

  checkDiet(){
    localStorage.setItem("bmi_status",this.bmi_status)
      this.router.navigate(['/bmi_checkdiet']);
  }
}
