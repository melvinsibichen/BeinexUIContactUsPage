import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeIndustrycardComponent } from './be-industrycard.component';

describe('BeIndustrycardComponent', () => {
  let component: BeIndustrycardComponent;
  let fixture: ComponentFixture<BeIndustrycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeIndustrycardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeIndustrycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
