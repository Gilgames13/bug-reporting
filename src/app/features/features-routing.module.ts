import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BugListComponent } from './bug-list/bug-list.component';
import { BugFormComponent } from './bug-form/bug-form.component';
import { WarnUnsavedChangesGuard } from '../core/guards/warn-unsaved-changes.guard';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'bug-list', component: BugListComponent },
  { path: 'add-bug', component: BugFormComponent, canDeactivate: [WarnUnsavedChangesGuard] },
  { path: 'edit-bug/:id', component: BugFormComponent, canDeactivate: [WarnUnsavedChangesGuard] },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
