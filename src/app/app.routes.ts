import { Routes } from '@angular/router';
import { JobSeekerLayoutComponent } from './JobSeeker/job-seeker-layout/job-seeker-layout.component';
import { AboutComponent } from './JobSeeker/about/about.component';
import { ContactUsComponent } from './JobSeeker/contact-us/contact-us.component';
import { HomeComponent } from './JobSeeker/home/home.component';
import { RegisterComponent } from './JobSeeker/register/register.component';
import { LoginComponent } from './JobSeeker/login/login.component';
import { AdminLayoutComponent } from './Admin/admin-layout/admin-layout.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';

export const routes: Routes = [

    {
        path: '', redirectTo: "/JobSeeker/Home", pathMatch: 'full'
    },

    { path:'JobSeeker' , component:JobSeekerLayoutComponent , children:[
        {
            path:'Home' , component:HomeComponent
        },
        {
            path:'About' , component:AboutComponent
        },
        {
            path: 'ContactUs', component: ContactUsComponent
        },
        {
            path: 'Register', component: RegisterComponent
        },
        {
            path: 'Login', component: LoginComponent
        }
    
       
    ]},

    { path:'Admin' , component:AdminLayoutComponent , children:[
        {
            path : 'Dashboard' , component:DashboardComponent
        }
    ]},

   
]
