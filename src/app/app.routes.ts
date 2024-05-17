import { Routes } from '@angular/router';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { BmiCheckdietComponent } from './bmi-checkdiet/bmi-checkdiet.component';

export const routes: Routes = [

    {
        path:'bmi_checkdiet',
        component:BmiCheckdietComponent
    },
];
