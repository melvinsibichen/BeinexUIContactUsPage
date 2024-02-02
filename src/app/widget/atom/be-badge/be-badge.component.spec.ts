import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeBadgeComponent } from './be-badge.component';

describe('BeBadgeComponent', () => {
  let component: BeBadgeComponent;
  let fixture: ComponentFixture<BeBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
