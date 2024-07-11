import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinicalendarComponent } from './minicalendar.component';

describe('MinicalendarComponent', () => {
  let component: MinicalendarComponent;
  let fixture: ComponentFixture<MinicalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinicalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinicalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
