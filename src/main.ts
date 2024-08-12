

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
// import { routes } from './app/app-routing.module';no se deben usar directamente como providers en angular 17
// import { FormsModule } from '@angular/forms'; no se deben usar directamente como providers en angular 17

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

