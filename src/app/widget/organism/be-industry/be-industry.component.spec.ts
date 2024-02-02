import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeIndustryComponent } from './be-industry.component';

describe('BeIndustryComponent', () => {
  let component: BeIndustryComponent;
  let fixture: ComponentFixture<BeIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeIndustryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
