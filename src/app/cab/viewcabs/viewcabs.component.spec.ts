import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCabsComponent } from './viewcabs.component';

describe('ViewcabsComponent', () => {
  let component: ViewCabsComponent;
  let fixture: ComponentFixture<ViewCabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewCabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
