import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BePaperplaneComponent } from './be-paperplane.component';

describe('BePaperplaneComponent', () => {
  let component: BePaperplaneComponent;
  let fixture: ComponentFixture<BePaperplaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BePaperplaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BePaperplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
