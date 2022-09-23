import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeseadosComponent } from './deseados.component';

describe('DeseadosComponent', () => {
  let component: DeseadosComponent;
  let fixture: ComponentFixture<DeseadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeseadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeseadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
