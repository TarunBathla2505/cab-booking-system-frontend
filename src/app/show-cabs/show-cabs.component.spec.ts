import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCabsComponent } from './show-cabs.component';

describe('ShowCabsComponent', () => {
  let component: ShowCabsComponent;
  let fixture: ComponentFixture<ShowCabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowCabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowCabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
