import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header1/header.component';
import { ContactComponent } from './footer/contact/contact.component'
import { OtherAreasComponent } from './content/other-areas/other-areas.component';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { FooterComponent } from './footer/footer/footer.component';
import { MyProjectComponent } from './content/my-project/my-project.component';
import { MyNavigationComponent } from './header/my-navigation/my-navigationv.component';

// import {  MatDialogModule,
//           MatFormFieldModule,
//           MatNativeDateModule,
//           MatInputModule,
//           MatTabsModule,
//           MatDatepickerModule,
//         } from '@angular/material';
import { DisplayService } from 'src/app/services/display.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AppRoutingModule, routingComponents } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    ContactComponent,
    AboutMeComponent,
    OtherAreasComponent,
    MyProjectComponent,
    MyNavigationComponent,
  ],
  entryComponents: [
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    // MatDialogModule,
    // MatFormFieldModule,
    // MatNativeDateModule,
    // MatInputModule,
    // MatTabsModule,
    // MatDatepickerModule,
    AppRoutingModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    DisplayService,
    UtilsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
