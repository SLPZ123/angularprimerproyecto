import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesAlumnoComponent } from './botones-alumno.component';

describe('InitStudentComponent', () => {
  let component: BotonesAlumnoComponent;
  let fixture: ComponentFixture<BotonesAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
