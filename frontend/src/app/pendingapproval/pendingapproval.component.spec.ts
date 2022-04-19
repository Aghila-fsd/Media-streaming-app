import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingapprovalComponent } from './pendingapproval.component';

describe('PendingapprovalComponent', () => {
  let component: PendingapprovalComponent;
  let fixture: ComponentFixture<PendingapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingapprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
