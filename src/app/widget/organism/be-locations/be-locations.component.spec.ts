import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeLocationsComponent } from './be-locations.component';

describe('BeLocationsComponent', () => {
  let component: BeLocationsComponent;
  let fixture: ComponentFixture<BeLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeLocationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
