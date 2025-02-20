import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ManageVehicleComponent } from './manage-vehicle/manage-vehicle.component';
import { ProfileComponent } from './profile/profile.component';
import { DriverComponent } from './driver/driver.component';

const routes: Routes = [
    {
        path: '', component: AppComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'profile' },            
            { path: 'profile', component: ProfileComponent },
            { path: 'driver', component:DriverComponent},
            { path: 'manage-vehicle', component: ManageVehicleComponent },                    
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
