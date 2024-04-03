import { Routes } from '@angular/router';
import { LoginFormComponent, RegistrationFormComponent } from './shared/components';
import { CoursesListComponent } from './features/courses-list/courses-list.component';


export const routes: Routes = [
    /* Add your code here */

    {path:'login', component:LoginFormComponent},
    {path:'registration', component:RegistrationFormComponent},
    {path:'courses', component:CoursesListComponent},
    {path:'**', component:CoursesListComponent}
    
];
