import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carta1Component } from './carta1.component';

describe('Carta1Component', () => {
  let component: Carta1Component;
  let fixture: ComponentFixture<Carta1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Carta1Component]
    });
    fixture = TestBed.createComponent(Carta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
