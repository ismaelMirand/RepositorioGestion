import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartoAnioComponent } from './cuarto-anio.component';

describe('CuartoAnioComponent', () => {
  let component: CuartoAnioComponent;
  let fixture: ComponentFixture<CuartoAnioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuartoAnioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartoAnioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
