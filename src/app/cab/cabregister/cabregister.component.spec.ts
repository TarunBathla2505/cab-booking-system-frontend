import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabregisterComponent } from './cabregister.component';

describe('CabregisterComponent', () => {
  let component: CabregisterComponent;
  let fixture: ComponentFixture<CabregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabregisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
