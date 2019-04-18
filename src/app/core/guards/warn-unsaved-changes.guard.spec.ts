import { TestBed, async, inject } from '@angular/core/testing';
import { WarnUnsavedChangesGuard } from './warn-unsaved-changes.guard';

describe('WarnUnsavedChangesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WarnUnsavedChangesGuard]
    });
  });

  it('should ...', inject([WarnUnsavedChangesGuard], (guard: WarnUnsavedChangesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
