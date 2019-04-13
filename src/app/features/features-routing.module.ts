import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BugListComponent } from './bug-list/bug-list.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'bug-list', component: BugListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }