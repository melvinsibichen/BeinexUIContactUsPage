import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeLocationComponent } from './be-location.component';

describe('BeLocationComponent', () => {
  let component: BeLocationComponent;
  let fixture: ComponentFixture<BeLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
