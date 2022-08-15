import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintoAnioComponent } from './quinto-anio.component';

describe('QuintoAnioComponent', () => {
  let component: QuintoAnioComponent;
  let fixture: ComponentFixture<QuintoAnioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuintoAnioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuintoAnioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
