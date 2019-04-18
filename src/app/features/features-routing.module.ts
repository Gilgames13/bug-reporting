import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BugListComponent } from './bug-list/bug-list.component';
import { BugFormComponent } from './bug-form/bug-form.component';
import { WarnUnsavedChangesGuard } from '../core/guards/warn-unsaved-changes.guard';
import { LoggedInGuard } from '../core/guards/logged-in.guard';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'bug-list', component: BugListComponent, canActivate: [LoggedInGuard] },
  { path: 'add-bug', component: BugFormComponent, canActivate: [LoggedInGuard], canDeactivate: [WarnUnsavedChangesGuard] },
  { path: 'edit-bug/:id', component: BugFormComponent, canActivate: [LoggedInGuard], canDeactivate: [WarnUnsavedChangesGuard] },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
