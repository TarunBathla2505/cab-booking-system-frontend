import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBestDriverComponent } from './view-best-driver.component';

describe('ViewBestDriverComponent', () => {
  let component: ViewBestDriverComponent;
  let fixture: ComponentFixture<ViewBestDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewBestDriverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewBestDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
