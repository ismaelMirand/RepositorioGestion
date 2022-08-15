import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoAnioComponent } from './segundo-anio.component';

describe('SegundoAnioComponent', () => {
  let component: SegundoAnioComponent;
  let fixture: ComponentFixture<SegundoAnioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoAnioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoAnioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
