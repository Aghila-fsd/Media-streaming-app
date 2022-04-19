import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglevedioComponent } from './singlevedio.component';

describe('SinglevedioComponent', () => {
  let component: SinglevedioComponent;
  let fixture: ComponentFixture<SinglevedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglevedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglevedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
