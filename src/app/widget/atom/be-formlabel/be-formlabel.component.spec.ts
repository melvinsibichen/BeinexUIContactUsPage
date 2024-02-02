import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeFormlabelComponent } from './be-formlabel.component';

describe('BeFormlabelComponent', () => {
  let component: BeFormlabelComponent;
  let fixture: ComponentFixture<BeFormlabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeFormlabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeFormlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
