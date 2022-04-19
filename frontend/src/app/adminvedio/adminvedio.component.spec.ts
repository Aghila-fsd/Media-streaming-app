import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminvedioComponent } from './adminvedio.component';

describe('AdminvedioComponent', () => {
  let component: AdminvedioComponent;
  let fixture: ComponentFixture<AdminvedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminvedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminvedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
