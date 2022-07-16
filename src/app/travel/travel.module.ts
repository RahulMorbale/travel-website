import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelRoutingModule } from './travel-routing.module';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http'
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlightsearchComponent } from './components/flightsearch/flightsearch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MatSelectModule } from '@angular/material/select';
import { FlightdetailsComponent } from './components/flightdetails/flightdetails.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MytripComponent } from './components/mytrip/mytrip.component';
import {MatTabsModule} from '@angular/material/tabs';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { CancelledComponent } from './components/cancelled/cancelled.component';
import { CompletedComponent } from './components/completed/completed.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    UserloginComponent,
    FlightsearchComponent,
    PagenotfoundComponent,
    FlightdetailsComponent,
    MytripComponent,
    UpcomingComponent,
    CancelledComponent,
    CompletedComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    TravelRoutingModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatExpansionModule,
    MatTabsModule
  ]
})
export class TravelModule { }
