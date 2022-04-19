import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewvedioComponent } from './newvedio.component';

describe('NewvedioComponent', () => {
  let component: NewvedioComponent;
  let fixture: ComponentFixture<NewvedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewvedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewvedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
