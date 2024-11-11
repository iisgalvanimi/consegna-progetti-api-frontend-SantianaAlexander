import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitComponentComponent } from './fruit-component.component';

describe('FruitComponentComponent', () => {
  let component: FruitComponentComponent;
  let fixture: ComponentFixture<FruitComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FruitComponentComponent]
    });
    fixture = TestBed.createComponent(FruitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
