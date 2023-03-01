import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDashboardComponent } from './master-dashboard.component';

describe('MasterDashboardComponent', () => {
  let component: MasterDashboardComponent;
  let fixture: ComponentFixture<MasterDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
