import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePageComponent } from './create-page/create-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TimecardTypeSelectorPageComponent } from './timecard-type-selector-page/timecard-type-selector-page.component';
import { WeeklyTimecardPageComponent } from './weekly-timecard-page/weekly-timecard-page.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'create', component: CreatePageComponent },
  { path: 'weekly', component: WeeklyTimecardPageComponent },
  { path: 'selector', component: TimecardTypeSelectorPageComponent },
  { path: "error", component: ErrorPageComponent },
  { path: '**', redirectTo:'home' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
