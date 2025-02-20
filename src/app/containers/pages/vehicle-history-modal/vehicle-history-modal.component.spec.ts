import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleHistoryModalComponent } from './vehicle-history-modal.component';

describe('VehicleHistoryModalComponent', () => {
  let component: VehicleHistoryModalComponent;
  let fixture: ComponentFixture<VehicleHistoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleHistoryModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleHistoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
