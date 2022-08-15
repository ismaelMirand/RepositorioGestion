import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerAnioComponent } from './tercer-anio.component';

describe('TercerAnioComponent', () => {
  let component: TercerAnioComponent;
  let fixture: ComponentFixture<TercerAnioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TercerAnioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TercerAnioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
