import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddTripComponent } from './add-trip/add-trip.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    { path: '', component: TripListingComponent, pathMatch: 'full' },
    { path: 'add-trip', component: AddTripComponent },
    { path: 'edit-trip/:id', component: EditTripComponent},
    { path: 'login', component: LoginComponent},
    { path: '**', redirectTo: ''}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
