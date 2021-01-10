//Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


//Bootstrap components
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroComponent } from './hero/hero.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { QualitiesComponent } from './qualities/qualities.component';
import { DonateComponent } from './donate/donate.component';
import { FooterComponent } from './footer/footer.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { TimecardHeaderComponent } from './timecard-header/timecard-header.component';
import { TimecardGridComponent } from './timecard-grid/timecard-grid.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HeroComponent, LandingPageComponent, AdvantagesComponent, QualitiesComponent, DonateComponent, FooterComponent, CreatePageComponent, TimecardHeaderComponent, TimecardGridComponent],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
