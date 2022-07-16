import { CompletedComponent } from './components/completed/completed.component';
import { CancelledComponent } from './components/cancelled/cancelled.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { MytripComponent } from './components/mytrip/mytrip.component';
import { FlightdetailsComponent } from './components/flightdetails/flightdetails.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { FlightsearchComponent } from './components/flightsearch/flightsearch.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'flightsearch',component:FlightsearchComponent},
  {path:'flightdetails',component:FlightdetailsComponent},
  {path:'mytrip',component:MytripComponent,
  children:[
    {path:'upcoming',component:UpcomingComponent},
    {path:'cancelled',component:CancelledComponent},
    {path:'completed',component:CompletedComponent}
  ]

},
  {path:'',component:UserloginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelRoutingModule { }
