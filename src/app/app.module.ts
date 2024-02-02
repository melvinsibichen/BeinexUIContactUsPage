import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeFservicesComponent } from './widget/organism/be-fservices/be-fservices.component';
import { BeLocationsComponent } from './widget/organism/be-locations/be-locations.component';
import { BeNavbarComponent } from './widget/organism/be-navbar/be-navbar.component';
import { BeLocationComponent } from './widget/molecule/be-location/be-location.component';
import { BeIndustrycardComponent } from './widget/molecule/be-industrycard/be-industrycard.component';
import { BeIndustryComponent } from './widget/organism/be-industry/be-industry.component';
import { BeSubscribeComponent } from './widget/organism/be-subscribe/be-subscribe.component';
import { BeFormlabelComponent } from './widget/atom/be-formlabel/be-formlabel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BeFormlabelsComponent } from './widget/molecule/be-formlabels/be-formlabels.component';
import { BeButtonComponent } from './widget/atom/be-button/be-button.component';
import { BeHeaderComponent } from './layouts/be-header/be-header.component';
import { BeFooterComponent } from './layouts/be-footer/be-footer.component';
import { BePaperplaneComponent } from './widget/molecule/be-paperplane/be-paperplane.component';
import { BeFormtextareaComponent } from './widget/atom/be-formtextarea/be-formtextarea.component';
import { BeBadgeComponent } from './widget/atom/be-badge/be-badge.component';



@NgModule({
  declarations: [
    AppComponent,

    BeFservicesComponent,
    BeLocationsComponent,
    BeHeaderComponent,
    BeFooterComponent,
    BeNavbarComponent,
    BeLocationComponent,
    BeIndustrycardComponent,
    BeIndustryComponent,
    BeSubscribeComponent,
    BeFormlabelComponent,
    BeFormlabelsComponent,
    BeButtonComponent,
    BePaperplaneComponent,
    BeFormtextareaComponent,
    BeBadgeComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
