import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BugFormComponent } from './bug-form.component';
import { PriorityEnum } from 'src/app/shared/enums/PriorityEnum';
import { RoleEnum } from 'src/app/shared/enums/RoleEnum';
import { StatusEnum } from 'src/app/shared/enums/StatusEnum';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedMaterialModule } from 'src/app/shared/shared-material/shared-material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('BugFormComponent', () => {
  let component: BugFormComponent;
  let fixture: ComponentFixture<BugFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BugFormComponent],
      imports: [ReactiveFormsModule, FormsModule, SharedMaterialModule, HttpClientModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form should be invalid if empty', () => {
    expect(component.bugForm.invalid).toBeTruthy();
  });

  it('Form should be valid when minimum required fields are filled', () => {
    component.createBugForm();
    component.bugForm.get('title').setValue('A bug title');
    component.bugForm.get('description').setValue('A bug description');
    component.bugForm.get('priority').setValue(PriorityEnum.Major);

    expect(component.bugForm.valid).toBeTruthy();
  });

  it('Form should be invalid when reporter is QA and status is not filled', () => {
    component.editOrCreateBug(null);
    component.bugForm.get('title').setValue('A bug title');
    component.bugForm.get('description').setValue('A bug description');
    component.bugForm.get('priority').setValue(PriorityEnum.Major);
    component.bugForm.get('reporter').setValue(RoleEnum.QA);

    expect(component.bugForm.invalid).toBeTruthy();
  });

  it('Form should be valid when minimum required fields are filled, reporter is QA and status is filled as well', () => {
    component.editOrCreateBug(null);
    component.bugForm.get('title').setValue('A bug title');
    component.bugForm.get('description').setValue('A bug description');
    component.bugForm.get('priority').setValue(PriorityEnum.Major);
    component.bugForm.get('reporter').setValue(RoleEnum.QA);
    component.bugForm.get('status').setValue(StatusEnum.DONE);

    expect(component.bugForm.valid).toBeTruthy();
  });

});
