import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDiscoComponent } from './datos-disco.component';

describe('DatosDiscoComponent', () => {
  let component: DatosDiscoComponent;
  let fixture: ComponentFixture<DatosDiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosDiscoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
