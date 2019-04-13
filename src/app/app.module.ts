import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core/core.module';
import { WelcomePageComponent } from './features/welcome-page/welcome-page.component';
import { RestServicesModule } from './shared/rest-services/rest-services.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RestServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
