import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernewvedioComponent } from './usernewvedio.component';

describe('UsernewvedioComponent', () => {
  let component: UsernewvedioComponent;
  let fixture: ComponentFixture<UsernewvedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernewvedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernewvedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
