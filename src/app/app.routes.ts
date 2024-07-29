import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterComponent } from './register/register.component';
import { TrackApplicationComponent } from './track-application/track-application.component';

export const routes: Routes = [
    {
        component:HomeComponent,
        path:'Home'
    },
    {
        component:AboutComponent,
        path:'About'
    },
    {
        component:GalleryComponent,
        path:'Gallery'
    },
    {
        component:LoginComponent,
        path:'Login'
    },
    {
        component:ContactusComponent,
        path:'Contact'
    },
    {
        component:RegisterComponent,
        path:'Reg'
    },
    {
        component:TrackApplicationComponent,
        path:'Track'
    }
];
