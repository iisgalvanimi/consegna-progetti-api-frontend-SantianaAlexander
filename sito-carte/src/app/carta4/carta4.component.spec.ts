import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carta4Component } from './carta4.component';

describe('Carta4Component', () => {
  let component: Carta4Component;
  let fixture: ComponentFixture<Carta4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Carta4Component]
    });
    fixture = TestBed.createComponent(Carta4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
