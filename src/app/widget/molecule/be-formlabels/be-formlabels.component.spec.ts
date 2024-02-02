import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeFormlabelsComponent } from './be-formlabels.component';

describe('BeFormlabelsComponent', () => {
  let component: BeFormlabelsComponent;
  let fixture: ComponentFixture<BeFormlabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeFormlabelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeFormlabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
