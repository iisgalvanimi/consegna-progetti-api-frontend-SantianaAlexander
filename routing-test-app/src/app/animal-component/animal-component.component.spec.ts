import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalComponentComponent } from './animal-component.component';

describe('AnimalComponentComponent', () => {
  let component: AnimalComponentComponent;
  let fixture: ComponentFixture<AnimalComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalComponentComponent]
    });
    fixture = TestBed.createComponent(AnimalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
