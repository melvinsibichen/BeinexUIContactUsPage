import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeFservicesComponent } from './be-fservices.component';

describe('BeFservicesComponent', () => {
  let component: BeFservicesComponent;
  let fixture: ComponentFixture<BeFservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeFservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeFservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
