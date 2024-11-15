import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carta5Component } from './carta5.component';

describe('Carta5Component', () => {
  let component: Carta5Component;
  let fixture: ComponentFixture<Carta5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Carta5Component]
    });
    fixture = TestBed.createComponent(Carta5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
