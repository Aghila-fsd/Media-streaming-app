import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyvedioComponent } from './myvedio.component';

describe('MyvedioComponent', () => {
  let component: MyvedioComponent;
  let fixture: ComponentFixture<MyvedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyvedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyvedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
