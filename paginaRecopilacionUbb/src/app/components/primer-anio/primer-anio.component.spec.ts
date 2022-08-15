import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerAnioComponent } from './primer-anio.component';

describe('PrimerAnioComponent', () => {
  let component: PrimerAnioComponent;
  let fixture: ComponentFixture<PrimerAnioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerAnioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerAnioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
