//Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

//Bootstrap components
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HeroComponent } from './hero/hero.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { QualitiesComponent } from './qualities/qualities.component';
import { DonateComponent } from './donate/donate.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HeroComponent, LandingPageComponent, AdvantagesComponent, QualitiesComponent, DonateComponent, FooterComponent],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
