import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SharedMaterialModule } from 'src/app/shared/shared-material/shared-material.module';
import { FeaturesModule } from 'src/app/features/features.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ContentComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedMaterialModule,
    FeaturesModule
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ]
})
export class CoreModule { }
