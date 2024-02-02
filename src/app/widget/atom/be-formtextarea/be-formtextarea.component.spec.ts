import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeFormtextareaComponent } from './be-formtextarea.component';

describe('BeFormtextareaComponent', () => {
  let component: BeFormtextareaComponent;
  let fixture: ComponentFixture<BeFormtextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeFormtextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeFormtextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
