import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { BugListComponent } from './bug-list/bug-list.component';
import { SharedMaterialModule } from '../shared/shared-material/shared-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BugListComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedMaterialModule,
    ReactiveFormsModule,
  ]
})
export class FeaturesModule { }
