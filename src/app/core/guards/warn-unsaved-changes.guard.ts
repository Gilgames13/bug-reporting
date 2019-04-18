import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivate } from '@angular/router';
import { BugFormComponent } from 'src/app/features/bug-form/bug-form.component';

@Injectable({
  providedIn: 'root'
})
export class WarnUnsavedChangesGuard implements CanDeactivate<BugFormComponent> {
  constructor() { }

  canDeactivate(
    component: BugFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate();
  }
}
