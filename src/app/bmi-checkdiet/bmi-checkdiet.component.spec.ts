import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCheckdietComponent } from './bmi-checkdiet.component';

describe('BmiCheckdietComponent', () => {
  let component: BmiCheckdietComponent;
  let fixture: ComponentFixture<BmiCheckdietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmiCheckdietComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BmiCheckdietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
