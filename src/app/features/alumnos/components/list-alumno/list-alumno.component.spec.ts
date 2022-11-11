import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAlumnoComponent } from '../view-alumno/view-alumno.component';

describe('ViewStudentComponent', () => {
  let component: ViewAlumnoComponent;
  let fixture: ComponentFixture<ViewAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

