import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubreviveComponent } from './subrevive.component';

describe('SubreviveComponent', () => {
  let component: SubreviveComponent;
  let fixture: ComponentFixture<SubreviveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubreviveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubreviveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
