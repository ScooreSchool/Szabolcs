import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdatmentesComponent } from './adatmentes.component';

describe('AdatmentesComponent', () => {
  let component: AdatmentesComponent;
  let fixture: ComponentFixture<AdatmentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdatmentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdatmentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
