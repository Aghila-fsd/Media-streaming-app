import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvedioComponent } from './editvedio.component';

describe('EditvedioComponent', () => {
  let component: EditvedioComponent;
  let fixture: ComponentFixture<EditvedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditvedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditvedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
