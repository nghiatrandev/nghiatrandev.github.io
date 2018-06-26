import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BannerComponent } from './header/banner/banner.component';
import { NavComponent } from './header/nav/nav.component';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { MyProjectComponent } from './content/my-project/my-project.component';
import { FooterComponent } from './footer/footer/footer.component';
import { WhyChooseMeComponent } from './content/why-choose-me/why-choose-me.component'
import { MyProjectDialogComponent } from './dialogs/my-project-dialog/my-project-dialog.component';

import {  MatDialogModule,
          MatFormFieldModule,
          MatNativeDateModule,
          MatInputModule,
          MatTabsModule,
          MatDatepickerModule,
        } from '@angular/material';
import { DisplayService } from 'src/app/services/display.service';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavComponent,
    AboutMeComponent,
    MyProjectComponent,
    FooterComponent,
    MyProjectDialogComponent,
    WhyChooseMeComponent,
  ],
  entryComponents: [
    MyProjectDialogComponent,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatTabsModule,
    MatDatepickerModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    DisplayService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
