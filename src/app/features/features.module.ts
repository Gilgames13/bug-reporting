import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FeaturesRoutingModule } from './features-routing.module';
import { BugListComponent } from './bug-list/bug-list.component';
import { SharedMaterialModule } from '../shared/shared-material/shared-material.module';
import { LoginComponent } from './login/login.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BugFormComponent } from './bug-form/bug-form.component';


@NgModule({
  declarations: [WelcomePageComponent, BugListComponent, LoginComponent, BugFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FeaturesRoutingModule,
    SharedMaterialModule
  ],
  exports: [
    WelcomePageComponent
  ]
})
export class FeaturesModule { }
